import { Injectable } from '@nestjs/common';
import { EnumTypeElement } from 'prisma/generated/client';
import { clearSession, createTable } from 'src/app.utils';
import { MonsterDto } from 'src/monster/dto/monster.dto';
import { TypeMonsterDto } from 'src/monster/dto/typeMonster.dto';
import { MonsterService } from 'src/monster/monster.service';
import { createTypeMonsterButton, yesOrNoButtons } from '../app.buttons';
import { Context } from '../context.interface';

@Injectable()
export class TgMonsterService {
  constructor(private readonly monsterService: MonsterService) {}

  async createStep1(ctx: Context) {
    await ctx.reply(`Создание монстра ⚙️`);

    const typesMonster = await this.monsterService.getAllTypesMonster();

    const table = createTable(typesMonster, [
      'ID',
      'Имя',
      'Img (url)',
      'Элемент',
      'Описание',
    ]);

    await ctx.reply(
      `Введи id породы монстра, либо создать новую:\n${table}`,
      createTypeMonsterButton(),
    );
    ctx.session.type = 'create_monster';
  }

  async createStep2(message: string, ctx: Context) {
    const typeMonster = await this.monsterService.getTypeMonsterById(message);

    if (!typeMonster) {
      await ctx.reply('Указан некорректный Id! Создание остановлено.');
      await clearSession(ctx);
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
  }

  async createStep3(message: string, ctx: Context) {
    const parts = message.split(' | ').map((part) => part.trim());
    if (parts.length !== 6) {
      await ctx.reply(`Введены неверные данные`);
      return;
    }

    await ctx.reply(
      `Введены данные:\n\ntypeId: ${ctx.session.text}\nsubtypeName: ${parts[0]}\nimg: ${parts[1]}\nstageEvo: ${parts[2]}\nbranchEvo: ${parts[3]}\nstarts: ${parts[4]}\nhunger: ${parts[5]}\n\nСоздать монстра?`,
      yesOrNoButtons(),
    );
    ctx.session.text = ctx.session.text + ' | ' + message;
  }

  async createFinale(ctx: Context) {
    await ctx.deleteMessage();

    const parts = ctx.session.text.split(' | ').map((part) => part.trim());

    if (parts.length !== 7) {
      await ctx.reply('Некорректные данные.');
      return;
    }

    const monster: MonsterDto = {
      typeId: parts[0],
      subtypeName: parts[1],
      img: parts[2],
      stageEvo: Number(parts[3]),
      branchEvo: Number(parts[4]),
      starts: Number(parts[5]),
      hunger: Number(parts[6]),
    };

    const createMonster = await this.monsterService.createMonster(monster);

    if (createMonster) {
      await ctx.reply('Монстер создан!');
    } else {
      await ctx.reply('Ошибка создания монстра.');
    }
    await clearSession(ctx);
  }

  async createTypeStep1(ctx: Context) {
    await ctx.deleteMessage();
    await ctx.reply(
      'Создание нового типа, введи данные о типе в формате \nName | Img(url) | Element | Description.\n\nВозможные типы элементаля:\nFIRE\nWATER\nGROUND\nICE\nELECTRIC\nAIR\nDARK\nGRASS\nLIGHT\nNEUTRAL',
    );
    ctx.session.type = 'create_type_monster';
  }

  async createTypeStep2(message: string, ctx: Context) {
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

    if (!validElements.includes(parts[2])) {
      await ctx.reply('Ошибка! Неверно указан элемент!');
      return;
    }

    const typeMonster: TypeMonsterDto = {
      name: parts[0],
      img: parts[1],
      element: parts[2] as EnumTypeElement,
      description: parts[3],
    };

    const createTypeMonster =
      await this.monsterService.createTypeMonster(typeMonster);

    await ctx.reply(`Приняты данные: ${message}`);

    if (createTypeMonster) {
      await ctx.reply(
        `Тип монстера создан!\n Для создания монстра введи данные в формате:\nsubtypeName | img(введи name, но перед этим забрось картинку на бд) | stageEvo | branchEvo | starts | hunger?`,
      );
    } else {
      await ctx.reply('Ошибка создания монстра.');
    }
    ctx.session.text = createTypeMonster.id;
    ctx.session.type = 'create_monster_2';
  }
}
