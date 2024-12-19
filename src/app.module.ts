import { Module } from '@nestjs/common';
import { BotService } from './bot/bot.servise';
import { PrismaService } from './prisma.service';

@Module({
  // imports: [UserModule],
  providers: [BotService, PrismaService],
})
export class AppModule {}
