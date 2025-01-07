import { Module } from '@nestjs/common';
import { CollectionService } from 'src/collection/collection.service';
import { MonsterService } from 'src/monster/monster.service';
import { PrismaService } from 'src/prisma.service';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';

@Module({
  controllers: [MarketController],
  providers: [MarketService, CollectionService, PrismaService, MonsterService],
  exports: [MarketService],
})
export class MarketModule {}
