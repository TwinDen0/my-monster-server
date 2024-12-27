import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CollectionDto } from './dto/collection.dto';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  async createEntry(dto: CollectionDto) {
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
}
