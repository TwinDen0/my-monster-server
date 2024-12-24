import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MonsterDto } from './dto/monster.dto';
import { TypeMonsterDto } from './dto/typeMonster.dto';

@Injectable()
export class MonsterService {
  constructor(private readonly prisma: PrismaService) {}

  async getMonsterById(id: string) {
    return await this.prisma.monster.findFirst({
      where: { id: id },
    });
  }

  async getMonsterByType(typeId: string) {
    return await this.prisma.monster.findMany({
      where: { typeId: typeId },
    });
  }

  async getAllMonster() {
    return await this.prisma.monster.findMany();
  }

  async getAllTypesMonster() {
    return await this.prisma.typeMonster.findMany();
  }

  async createMonster(dto: MonsterDto) {
    try {
      return await this.prisma.monster.create({
        data: {
          subtypeName: dto.subtypeName,
          img: dto.img,
          stageEvo: dto.stageEvo,
          branchEvo: dto.branchEvo,
          starts: dto.starts,
          hunger: dto.hunger,
          type: {
            connect: {
              id: dto.typeId,
            },
          },
        },
      });
    } catch (error) {
      console.log('Error creating monster:', error);
      return null;
    }
  }

  async createTypeMonster(dto: TypeMonsterDto) {
    try {
      return await this.prisma.typeMonster.create({
        data: {
          name: dto.name,
          img: dto.img,
          element: dto.element,
          description: dto.description,
        },
      });
    } catch (error) {
      console.log('Error creating type monster:', error);
    }
  }

  async getTypeMonsterById(id: string) {
    return await this.prisma.typeMonster.findFirst({
      where: { id: id },
    });
  }
}
