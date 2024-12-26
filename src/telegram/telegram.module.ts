import { Module } from '@nestjs/common';
import { CollectionService } from 'src/collection/collection.service';
import { FileService } from 'src/file/file.service';
import { MarketService } from 'src/market/market.service';
import { MonsterService } from 'src/monster/monster.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { HandlersService } from './handlers.service';
import { TgCollectionService } from './tgCollection.service';
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
    CollectionService,
    TgMarketService,
    TgFileService,
    TgCollectionService,
  ],
  exports: [
    TgMonsterService,
    HandlersService,
    TgMarketService,
    TgFileService,
    TgCollectionService,
  ],
})
export class TelegramModule {}
