import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('all')
  @ApiOperation({ summary: 'Получить все виды еды' })
  async getAllPack() {
    return this.foodService.getAllFood();
  }

  @Get('add_monster')
  @ApiOperation({ summary: 'Добавление еды к монстру' })
  async startEvo(@Query() query: { userMonsterId: string; foodId: string }) {
    const { userMonsterId, foodId } = query;
    return await this.foodService.addMonsterFood(userMonsterId, foodId);
  }
}
