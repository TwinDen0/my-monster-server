import { Injectable } from '@nestjs/common';
import { clearSession } from 'src/app.utils';
import { CollectionService } from 'src/collection/collection.service';
import { CollectionDto } from 'src/collection/dto/collection.dto';
import { MonsterService } from 'src/monster/monster.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { Context } from '../context.interface';

@Injectable()
export class TgCollectionService {
  constructor(
    private readonly userService: UserService,
    private readonly monsterService: MonsterService,
    private readonly collectionService: CollectionService,
    private readonly prisma: PrismaService,
  ) {}

  async deleteData(ctx: Context) {
    await ctx.reply(`Удаляю...`);
    const collections = await this.prisma.collection.deleteMany();
    const monsters = await this.prisma.collection.deleteMany();

    await ctx.reply(
      `Удалено Коллекций:${collections.count} Монстеров:${monsters.count}`,
    );
  }

  async addCollection1(ctx: Context) {
    await ctx.reply(
      `Для добавления монстра в коллекцию введите:\n\nTgIdUser | IdMonster | name`,
    );
    ctx.session.type = 'add_collection';
  }

  async addCollection2(message: string, ctx: Context) {
    await ctx.reply(`Создание записи в коллекции⚙️`);

    const parts = message.split(' | ').map((part) => part.trim());

    if (parts.length !== 3) {
      await ctx.reply(`Введены неверные данные`);
      await clearSession(ctx);
      return;
    }

    const user = await this.userService.getUser(parts[0]);
    const monster = await this.monsterService.getMonsterById(parts[1]);

    if (!user || !monster) {
      await ctx.reply(`Введены неверные id ${parts[0]} ${parts[1]}`);
      await clearSession(ctx);
      return;
    }

    const dto: CollectionDto = {
      leaderId: user.telegramId,
      monsterId: monster.id,
      name: parts[2],
    };

    const newCollectionRecord =
      await this.collectionService.createUserMonster(dto);

    console.log(newCollectionRecord);
    await ctx.reply(
      `${user.fullName} получает ${parts[2]} ${monster.subtypeName}!\n\nНовая запись: ${newCollectionRecord.id}`,
    );
    ctx.session.type = 'add_collection';
    await clearSession(ctx);
  }

  async deleteActiveMonster(ctx: Context) {
    await ctx.reply(`Удаляю...`);
    const userId = String(ctx.from.id);

    const collection = await this.prisma.collection.updateMany({
      where: {
        leaderId: userId,
        isEvo: false,
      },
      data: {
        isEvo: false,
      },
    });
    console.log('Удаляю активных монстров: ', collection);

    const user = await this.prisma.user.update({
      where: {
        telegramId: userId,
      },
      data: {
        evoPlaces: 3,
      },
    });

    console.log(user);
    await ctx.reply(`Удалил ${collection.count} записи`);
    await clearSession(ctx);
  }
}
