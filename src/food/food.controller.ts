import { Controller, Get } from '@nestjs/common';
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
}
