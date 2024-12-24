import { Module } from '@nestjs/common';
import { MonsterService } from 'src/monster/monster.service';
import { PrismaService } from 'src/prisma.service';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';

@Module({
  controllers: [MarketController],
  providers: [MarketService, PrismaService, MonsterService],
  exports: [MarketService],
})
export class MarketModule {}
