import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('start_evo')
  @ApiOperation({ summary: 'Старт эволюции' })
  async startEvo(@Query() query: { tgId: string; collectionId: string }) {
    const { tgId, collectionId } = query;
    return await this.collectionService.startEvo(tgId, collectionId);
  }
}
