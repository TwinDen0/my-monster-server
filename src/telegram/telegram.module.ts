import { Module } from '@nestjs/common';
import { FileService } from 'src/file/file.service';
import { MarketService } from 'src/market/market.service';
import { MonsterService } from 'src/monster/monster.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { HandlersService } from './handlers.service';
import { TgFileService } from './tgFile.service';
import { TgMarketService } from './tgMarket.service';
import { TgMonsterService } from './tgMonster.service';

@Module({
  providers: [
    TgMonsterService,
    HandlersService,
    PrismaService,
    UserService,
    MonsterService,
    MarketService,
    FileService,
    TgMarketService,
    TgFileService,
  ],
  exports: [TgMonsterService, HandlersService, TgMarketService, TgFileService],
})
export class TelegramModule {}
