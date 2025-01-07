import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  // @Post('create_packs')
  // @ApiOperation({ summary: 'Создать набор' })
  // async getCreatePack(@Body() dto: PackDto) {
  //   return this.marketService.createPack(dto);
  // }

  @Get('packs')
  @ApiOperation({ summary: 'Получить все наборы' })
  async getAllPack() {
    return this.marketService.getAllPack();
  }

  @Get('drop')
  @ApiOperation({ summary: 'Получить содержимое набора' })
  async getDropPack(
    @Query('id') packId: string,
    @Query('type_price') isCoinsPrice: string,
    @Query('tgId') tgId: string,
  ) {
    console.log('ПОЛУЧАЮ ПАК');
    return this.marketService.getDropPack(packId, isCoinsPrice, tgId);
  }

  @Get('daily_cards')
  @ApiOperation({ summary: 'Получить ежедневных монстров' })
  async getDailyCards() {
    return this.marketService.getDailyCards();
  }
}
