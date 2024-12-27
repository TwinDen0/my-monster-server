import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CollectionDto } from './dto/collection.dto';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  async createUserMonster(dto: CollectionDto) {
    const createdPack = await this.prisma.collection.create({
      data: {
        leader: {
          connect: {
            telegramId: dto.leaderId,
          },
        },
        monster: {
          connect: {
            id: dto.monsterId,
          },
        },
        name: dto.name,
      },
    });
    return createdPack;
  }

  async startEvo(tgId: string, collectionId: string) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId: tgId },
    });

    if (user.evoPlaces > 0) {
      await this.prisma.user.update({
        where: { telegramId: tgId },
        data: { evoPlaces: user.evoPlaces - 1 },
      });

      const userMonster = await this.prisma.collection.update({
        where: { id: collectionId },
        data: { isEvo: true },
      });

      return userMonster;
    } else {
      throw new Error('Нет доступных мест для эволюции');
    }
  }
}
