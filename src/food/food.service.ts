import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FoodDto } from './dto/food.dto';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async createFood(dto: FoodDto) {
    const createdFood = await this.prisma.food.create({
      data: dto,
    });
    return createdFood;
  }

  async getAllFood() {
    const foods = await this.prisma.food.findMany();
    return foods;
  }

  async addMonsterFood(userMonsterId: string, foodId: string) {
    const monsterFood = await this.prisma.monstersFood.create({
      data: {
        food: {
          connect: {
            id: foodId,
          },
        },
        collection: {
          connect: {
            id: userMonsterId,
          },
        },
      },
    });
  }
}
