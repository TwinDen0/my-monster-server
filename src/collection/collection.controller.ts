import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Старт эволюции' })
  @Get('start_evo')
  async startEvo(@Query() query: { tgId: string; collectionId: string }) {
    const { tgId, collectionId } = query;
    return await this.collectionService.startEvo(tgId, collectionId);
  }
}
