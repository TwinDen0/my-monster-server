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
import { Telegraf } from 'telegraf';
import { yesOrNoButtons } from './app.buttons';
import { clearSession } from './app.utils';
import { Context } from './context.interface';
import { FileService } from './file/file.service';
import { MarketService } from './market/market.service';
import { MonsterService } from './monster/monster.service';
import { HandlersService } from './telegram/handlers.service';
import { TgCollectionService } from './telegram/tgCollection.service';
import { TgFileService } from './telegram/tgFile.service';
import { TgFoodService } from './telegram/tgFood.service';
import { TgMarketService } from './telegram/tgMarket.service';
import { TgMonsterService } from './telegram/tgMonster.service';
import { TgUserService } from './telegram/tgUser.service';
import { UserService } from './user/user.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly userService: UserService,
    private readonly monsterService: MonsterService,
    private readonly fileService: FileService,
    private readonly marketService: MarketService,
    private readonly tgMonsterService: TgMonsterService,
    private readonly tgMarketService: TgMarketService,
    private readonly tgFileService: TgFileService,
    private readonly tgCollectionService: TgCollectionService,
    private readonly tgUserService: TgUserService,
    private readonly tgFoodService: TgFoodService,
    private readonly handlersService: HandlersService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    const botTgId = this.bot.telegram;
    await this.handlersService.start(botTgId, ctx);
  }

  @Hears('/clear')
  async clear(ctx: Context) {
    await clearSession(ctx);
  }

  @Hears('/session_data')
  async sessionData(ctx: Context) {
    await this.handlersService.sessionData(ctx);
  }

  @Hears('/update_photo')
  async updatePhoto(ctx: Context) {
    const botTgId = this.bot.telegram;
    await this.handlersService.updatePhoto(botTgId, ctx);
  }

  @Hears('💬 Отправить сообщение пользователям')
  async sendMessage(ctx: Context) {
    ctx.session.type = 'send_message';
    await ctx.reply(
      `Введи сообщение, которое вы хотите отправить всем пользователям:`,
    );
  }

  @Hears('🚮 Отчистить базу данных')
  async deleteAllDb(ctx: Context) {
    await this.tgCollectionService.deleteData(ctx);
  }

  // @Hears('☠️ Удалить юзера')
  // async deleteUser(ctx: Context) {
  //   await this.tgCollectionService.deleteData(ctx);
  // }

  @Hears('🥣 Добавить блюдо')
  async createFood(ctx: Context) {
    await this.tgFoodService.createFood1(ctx);
  }

  @Hears('🦖 Добавить монстра')
  async createMonster(ctx: Context) {
    await this.tgMonsterService.createStep1(ctx);
  }

  @Hears('➕ Добавить пак')
  async createPack(ctx: Context) {
    await this.tgMarketService.createPackStep1(ctx);
  }

  @Hears('⬇️ Загрузить файл')
  async saveFile(ctx: Context) {
    await this.tgFileService.saveFilePath(ctx);
  }

  @Hears('🚸 Добавить в коллекцию')
  async addCollection(ctx: Context) {
    await this.tgCollectionService.addCollection1(ctx);
  }

  @Hears('🗑 Удалить развитие')
  async deleteActiveMonster(ctx: Context) {
    await this.tgCollectionService.deleteActiveMonster(ctx);
  }

  @Hears('💎 Добавить пользователю кристаллы')
  async addUserCrystals(ctx: Context) {
    await this.tgUserService.addUserCrystalsStep1(ctx);
  }

  @On('document')
  async getPhoto(@Message() message: any, @Ctx() ctx: Context) {
    if (ctx.session.type === 'save_file') {
      await this.tgFileService.saveFileLoad(message, ctx);
    }
  }

  @On('text')
  async getText(@Message('text') message: string, @Ctx() ctx: Context) {
    switch (ctx.session.type) {
      case 'add_user_crystal':
        await this.tgUserService.addUserCrystalsStep2(message, ctx);
        break;

      case 'create_type_monster':
        await this.tgMonsterService.createTypeStep2(message, ctx);
        break;

      case 'create_monster':
        await this.tgMonsterService.createStep2(message, ctx);
        break;

      case 'create_monster_2':
        await this.tgMonsterService.createStep3(message, ctx);
        break;

      case 'save_file':
        ctx.session.text = message;
        await ctx.reply('Теперь отправь файл, который необходимо скачать: ');
        break;

      case 'create_pack':
        await this.tgMarketService.createPackStep2(message, ctx);
        break;

      case 'add_collection':
        await this.tgCollectionService.addCollection2(message, ctx);
        break;

      case 'create_food':
        await this.tgFoodService.createFood2(message, ctx);
        break;

      default:
        await ctx.reply('Неизвестный тип действия.');
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
      await this.tgMonsterService.createFinale(ctx);
      return;
    }

    if (ctx.session.type === 'create_pack') {
      await this.tgMarketService.createPackStep3(ctx);
      return;
    }

    if (ctx.session.type === 'create_food') {
      await this.tgFoodService.createFood3(ctx);
      return;
    }
  }

  @Action('handle_no')
  async handleNo(@Ctx() ctx: Context) {
    await ctx.deleteMessage();
    await ctx.reply('Отмена!');
    await clearSession(ctx);
  }

  @Action('create_type_monster')
  async createTypeMonster(@Ctx() ctx: Context) {
    await this.tgMonsterService.createTypeStep1(ctx);
  }
}
