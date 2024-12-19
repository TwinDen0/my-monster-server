import { Module } from '@nestjs/common';
import { BotService } from './bot/bot.servise';
import { PrismaService } from './prisma.service';
import { UserController } from './user/user.controller';

@Module({
  controllers: [UserController],
  providers: [BotService, PrismaService],
})
export class AppModule {}
