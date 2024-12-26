import { Injectable } from '@nestjs/common';
import { clearSession } from 'src/app.utils';
import { CollectionService } from 'src/collection/collection.service';
import { CollectionDto } from 'src/collection/dto/collection.dto';
import { MonsterService } from 'src/monster/monster.service';
import { UserService } from 'src/user/user.service';
import { Context } from '../context.interface';

@Injectable()
export class TgCollectionService {
  constructor(
    private readonly userService: UserService,
    private readonly monsterService: MonsterService,
    private readonly collectionService: CollectionService,
  ) {}

  async addCollection1(ctx: Context) {
    await ctx.reply(
      `Для добавления монстра в коллекцию введите:\n\nTgIdUser | IdMonster`,
    );
    ctx.session.type = 'add_collection';
  }

  async addCollection2(message: string, ctx: Context) {
    await ctx.reply(`Создание записи в коллекции⚙️`);

    const parts = message.split(' | ').map((part) => part.trim());

    if (parts.length !== 2) {
      await ctx.reply(`Введены неверные данные`);
      await clearSession(ctx);
      return;
    }

    const user = await this.userService.getUser(parts[0]);
    const monster = await this.monsterService.getMonsterById(parts[1]);

    if (!user || !monster) {
      await ctx.reply(`Введены неверные id`);
      await clearSession(ctx);
      return;
    }

    const dto: CollectionDto = {
      leaderId: user.telegramId,
      monsterId: monster.id,
    };

    const newCollectionRecord = await this.collectionService.createEntry(dto);

    console.log(newCollectionRecord);
    await ctx.reply(
      `${user.fullName} получает ${monster.subtypeName}!\n\nНовая запись: ${newCollectionRecord.id}`,
    );
    ctx.session.type = 'add_collection';
  }
}
