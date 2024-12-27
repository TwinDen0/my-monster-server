import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { AppUpdate } from './app.update';
import { CollectionModule } from './collection/collection.module';
import { FileModule } from './file/file.module';
import { MarketModule } from './market/market.module';
import { MonsterModule } from './monster/monster.module';
import { PrismaService } from './prisma.service';
import { TelegramModule } from './telegram/telegram.module';
import { UserModule } from './user/user.module';

const session = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    UserModule,
    MarketModule,
    MonsterModule,
    FileModule,
    TelegrafModule,
    TelegrafModule.forRoot({
      token: process.env.BOT_API_TOKEN,
      middlewares: [session.middleware()],
    }),
    TelegramModule,
    CollectionModule,
  ],
  providers: [AppUpdate, PrismaService],
})
export class AppModule {}
