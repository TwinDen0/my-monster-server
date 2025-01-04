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
}
