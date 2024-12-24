import { Injectable } from '@nestjs/common';
import { createTable } from 'src/app.utils';
import { MarketService } from 'src/market/market.service';
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

    await ctx.reply('Введи:\nИмя | Описание | URL Img | Тип (market or not)');

    ctx.session.text = '';
    ctx.session.type = 'create_pack';
  }

  async createPackStep2(message: string, ctx: Context) {
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
