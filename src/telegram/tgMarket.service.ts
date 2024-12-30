import { Injectable } from '@nestjs/common';
import { clearSession, createTable } from 'src/app.utils';
import { PackDto } from 'src/market/dto/pack.dto';
import { MarketService } from 'src/market/market.service';
import { yesOrNoButtons } from '../app.buttons';
import { Context } from '../context.interface';

@Injectable()
export class TgMarketService {
  constructor(private readonly marketService: MarketService) {}

  async createPackStep1(ctx: Context) {
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

    await ctx.reply(
      'Введи:\nИмя\nОписание\nURL Img\nТип (market or not)\nДата окончания (например, 12.08.2025)\nЦена в монетах\nЦена в кристалах\nМонеты (пример, 0 - 120)\nКристалы (пример, 0 - 120)\nШанс на Монстра (от 0 до 100)\nВыпадение монстров (JSON { "id"(id type): "1212121212", "percent": "13" })\n',
    );

    ctx.session.text = '';
    ctx.session.type = 'create_pack';
  }

  async createPackStep2(message: string, ctx: Context) {
    const parts = message.split('\n').map((part) => part.trim());

    if (parts.length !== 11) {
      await ctx.reply(`Введены некорректные данные`);
      await clearSession(ctx);
      return;
    }

    ctx.session.text = message;

    const moneys = parts[7].split('-').map((part) => part.trim());
    const crystals = parts[8].split('-').map((part) => part.trim());

    await ctx.reply(
      `Введены данные:\nИмя: ${parts[0]}\nОписание: ${parts[1]}\nURL Img: ${parts[2]}\nТип (market or not): ${parts[3]}\nДата окончания: ${parts[4]}\nЦена в монетах: ${parts[5]}\nЦена в кристалах: ${parts[6]}\nМонеты (пример, 0 - 120): ${moneys[0]}-${moneys[1]}\nКристалы (пример, 0 - 120): ${crystals[0]}-${crystals[1]}\nШанс на Монстра (от 0 до 100): ${parts[9]}\nВыпадение монстров: ${parts[10]}\n`,
      yesOrNoButtons(),
    );
  }

  async createPackStep3(ctx: Context) {
    await ctx.reply(`Создание пака ⚙️`);
    const mess = ctx.session.text;
    const parts = mess.split('\n').map((part) => part.trim());

    const moneys = parts[7].split('-').map((part) => part.trim());
    const crystals = parts[8].split('-').map((part) => part.trim());

    const date = parts[4].split('.');
    const day = parseInt(date[0], 10);
    const month = parseInt(date[1], 10) - 1; // Месяцы начинаются с 0
    const year = parseInt(date[2], 10);

    const dateObject = new Date(year, month, day);

    const dto: PackDto = {
      name: parts[0],
      description: parts[1],
      img: parts[2],
      type: parts[3],
      endAt: dateObject,
      priceCoin: Number(parts[5]),
      priceCrystal: Number(parts[6]),
      coinMin: Number(moneys[0]),
      coinMax: Number(moneys[1]),
      crystalMin: Number(crystals[0]),
      crystalMax: Number(crystals[1]),
      percentDropMonster: Number(parts[9]),
      monsters: parts[10],
    };

    const newPack = await this.marketService.createPack(dto);

    await ctx.reply(
      `Пак успешно создан!\nId: ${newPack.id}\nEnd: ${newPack.endAt}`,
    );

    await clearSession(ctx);
  }
}
