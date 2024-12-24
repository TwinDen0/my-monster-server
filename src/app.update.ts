import {
  Action,
  Ctx,
  Hears,
  InjectBot,
  Message,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { EnumTypeElement } from 'prisma/generated/client';
import { Telegraf } from 'telegraf';
import {
  adminButtons,
  createTypeMonsterButton,
  yesOrNoButtons,
} from './app.buttons';
import { createTable } from './app.utils';
import { Context } from './context.interface';
import { FileService } from './file/file.service';
import { MarketService } from './market/market.service';
import { MonsterDto } from './monster/dto/monster.dto';
import { TypeMonsterDto } from './monster/dto/typeMonster.dto';
import { MonsterService } from './monster/monster.service';
import { UserService } from './user/user.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly userService: UserService,
    private readonly monsterService: MonsterService,
    private readonly fileService: FileService,
    private readonly marketService: MarketService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    const userId = String(ctx.from.id);
    const userAvatar = await this.userService.getUserAvatarUrl(
      ctx.from.id,
      this.bot.telegram,
    );

    const user = await this.userService.getUser(userId);

    if (user) {
      console.log('Он уже есть!');
    } else {
      await this.userService.create({
        telegramId: userId,
        username: ctx.from?.username ? ctx.from?.username : '',
        fullName: `${ctx.from?.first_name ? ctx.from?.first_name : ''}${ctx.from?.last_name ? ' ' + ctx.from?.last_name : ''}`,
        userAvatar: userAvatar,
      });
    }

    if (String(ctx.from.id) === process.env.ADMIN_ID) {
      await ctx.reply(
        `Привет админ! ${userId}\nОтчистить контекст: /clear\nИнформация о сессии: /session_data`,
        adminButtons(),
      );
    } else {
      await ctx.reply(`Добро пожаловать в мир My Pet Monster!`);
    }
  }

  @Hears('/clear')
  async clear(ctx: Context) {
    await ctx.reply(`Контекст отчищен`);
    ctx.session.type = '';
    ctx.session.text = '';
  }

  @Hears('/session_data')
  async sessionData(ctx: Context) {
    await ctx.reply(
      `session.type: ${ctx.session.type}\nsession.text: ${ctx.session.text}`,
    );
  }

  @Hears('💬 Отправить сообщение пользователям')
  async sendMessage(ctx: Context) {
    ctx.session.type = 'send_message';
    await ctx.reply(
      `Введи сообщение, которое вы хотите отправить всем пользователям:`,
    );
  }

  @Hears('🦖 Добавить монстра')
  async createMonster(ctx: Context) {
    await ctx.reply(`Создание монстра ⚙️`);

    const typesMonster = await this.monsterService.getAllTypesMonster();

    const table = createTable(typesMonster, [
      'ID',
      'Имя',
      'Элемент',
      'Описание',
    ]);

    await ctx.reply(
      `Введи id породы монстра, либо создать новую:\n${table}`,
      createTypeMonsterButton(),
    );
    ctx.session.type = 'create_monster';
  }

  @Hears('➕ Добавить пак')
  async createPack(ctx: Context) {
    await ctx.reply(`Создание пака ⚙️`);

    const packs = await this.marketService.getAllPack();

    const table = createTable(packs, [
      'ID',
      'Имя',
      'Описание',
      'URL Img',
      'Тип',
      'Окончание',
      'Цена в монетах',
      'Цена в кристалах',
      'Мин.Монеты',
      'Мах.Монеты',
      'Мин.Кристалы',
      'Мах.Кристалы',
      'Шанс на Монстра',
      'monsters ({id: String, percent: 13})',
    ]);

    await ctx.reply(table);

    await ctx.reply('Введи:\nИмя | Описание | URL Img | Тип (market or not)');

    ctx.session.text = '';
    ctx.session.type = 'create_pack';
  }

  @Hears('⬇️ Загрузить файл')
  async saveFile(ctx: Context) {
    await ctx.reply(`Введите путь загрузки файла: `);
    ctx.session.type = 'save_file';
  }

  @On('document')
  async getPhoto(@Message() message: any, @Ctx() ctx: Context) {
    if (ctx.session.type === 'save_file') {
      await ctx.reply('Получил документ..', message);

      const fileId = message.document.file_id;
      const fileLink = await ctx.telegram.getFileLink(fileId);

      const chatId = ctx.chat.id;
      const folder = ctx.session.text;

      const res = await this.fileService.saveFileFromTG(fileLink, folder);

      if (res) {
        await ctx.reply('Фото добавлено');
      } else {
        await ctx.reply('Ошибка загрузки файла');
      }
    }
    ctx.session.type = '';
    ctx.session.text = '';
  }

  @On('text')
  async getText(@Message('text') message: string, @Ctx() ctx: Context) {
    if (ctx.session.type === 'create_type_monster') {
      const parts = message.split(' | ').map((part) => part.trim());

      if (parts.length !== 4) {
        await ctx.reply(`Ошибка, указаны некорректные данные!`);
      }

      const validElements = [
        'FIRE',
        'WATER',
        'GROUND',
        'ICE',
        'ELECTRIC',
        'AIR',
        'DARK',
        'GRASS',
        'LIGHT',
        'NEUTRAL',
      ];

      if (!validElements.includes(parts[1])) {
        await ctx.reply('Ошибка! Неверно указан элемент!');
        return;
      }

      const typeMonster: TypeMonsterDto = {
        name: parts[0],
        img: parts[1],
        element: parts[2] as EnumTypeElement,
        description: parts[3],
      };

      await this.monsterService.createTypeMonster(typeMonster);

      await ctx.reply(`Приняты данные: ${message}`);
    }

    if (ctx.session.type === 'create_monster') {
      const typeMonster = await this.monsterService.getTypeMonsterById(message);

      if (!typeMonster) {
        await ctx.reply('Указан некорректный Id! Создание остановлено.');
        ctx.session.type = '';
        return;
      }
      const monsters = await this.monsterService.getMonsterByType(message);

      let table =
        'ID\t\tИмя подтипа\t\tПуть картинки\t\tШаг эволюции\t\tВетвь эволюции\t\tЗвезды\t\tГолод\n';
      table += '---------------------------------------------------\n';

      monsters.forEach((monster) => {
        table += `${monster.id}\t${monster.subtypeName}\t${monster.img}\t${monster.stageEvo}\t${monster.branchEvo}\t${monster.starts}\t${monster.hunger}\n`;
      });

      await ctx.reply(
        `Выбран ID: ${message}\n\nМонстры с таким же типом:\n${table}`,
      );

      await ctx.reply(
        `Введи данные в формате:\nsubtypeName | img(введи name, но перед этим забрось картинку на бд) | stageEvo | branchEvo | starts | hunger?`,
      );
      ctx.session.text = message;
      ctx.session.type = 'create_monster_2';
      return;
    }

    if (ctx.session.type === 'create_monster_2') {
      const parts = message.split(' | ').map((part) => part.trim());
      if (parts.length < 6) {
        await ctx.reply(`Введены неверные данные`);
        return;
      }

      await ctx.reply(
        `Введены данные:\n\ntypeId: ${ctx.session.text}\nsubtypeName: ${parts[0]}\nimg: ${parts[1]}\nstageEvo: ${parts[2]}\nbranchEvo: ${parts[3]}\nstarts: ${parts[4]}\nhunger: ${parts[5]}\n\nСоздать монстра?`,
        yesOrNoButtons(),
      );
      ctx.session.text = ctx.session.text + ' | ' + message;
    }

    if (ctx.session.type === 'save_file') {
      ctx.session.text = message;
      await ctx.reply('Теперь отправь файл, который необходимо скачать: ');
    }

    if (ctx.session.type === 'create_pack') {
      const parts = message.split('\n').map((part) => part.trim());

      if (parts.length !== 4) {
        ctx.session.type = '';
        await ctx.reply(`Введены неверные данные`);
        return;
      }

      ctx.session.text = message;

      await ctx.reply(`Введены данные:\n${message}`);
    }
  }

  @On('message')
  async getMessage(@Ctx() ctx: Context) {
    if (!ctx.session?.type) {
      console.log('Нет type');
      return;
    }

    if (ctx.session.type === 'send_message') {
      const massage = ctx.copyMessages(ctx.chat.id, [ctx.message.message_id]);

      await massage;
      await ctx.reply('Отправить это сообщение всем юзерам?', yesOrNoButtons());
    }
  }

  @Action('handle_yes')
  async handleYes(@Ctx() ctx: Context) {
    if (ctx.session.type === 'send_message') {
      const users = await this.userService.getAllUser();

      await ctx.deleteMessage();

      for (const user of users) {
        try {
          await ctx.telegram.copyMessage(
            user.telegramId,
            ctx.callbackQuery.message.chat.id,
            ctx.callbackQuery.message.message_id - 1,
          );
        } catch (error) {
          console.log(
            `Ошибка при копировании сообщения для пользователя ${user.telegramId}:`,
            error,
          );
        }
      }

      await ctx.reply('Сообщения отправлены!');
    }

    if (ctx.session.type === 'create_monster_2') {
      await ctx.deleteMessage();

      const parts = ctx.session.text.split(' | ').map((part) => part.trim());
      const monster: MonsterDto = {
        typeId: parts[0],
        subtypeName: parts[1],
        img: parts[2],
        stageEvo: Number(parts[3]),
        branchEvo: Number(parts[4]),
        starts: Number(parts[5]),
        hunger: Number(parts[6]),
      };

      const create_monster = await this.monsterService.createMonster(monster);

      if (create_monster) {
        await ctx.reply('Монстер создан!');
      } else {
        await ctx.reply('Ошибка создания монстра.');
      }
      ctx.session.text = '';
      ctx.session.type = '';
    }
  }

  @Action('handle_no')
  async handleNo(@Ctx() ctx: Context) {
    if (ctx.session.type === 'send_message') {
      await ctx.deleteMessage();
      await ctx.reply('Отправка отменена!');
    }

    if (ctx.session.type === 'create_monster_2') {
      await ctx.deleteMessage();
      await ctx.reply('Создание монстра отменено!');
    }

    ctx.session.text = '';
    ctx.session.type = '';
  }

  @Action('create_type_monster')
  async createTypeMonster(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx.reply(
      'Создание нового типа, введи данные о типе в формате \nName | Img(url) | Element | Description.\n\nВозможные типы элементаля:\nFIRE\nWATER\nGROUND\nICE\nELECTRIC\nAIR\nDARK\nGRASS\nLIGHT\nNEUTRAL',
    );
    ctx.session.type = 'create_type_monster';
  }
}
