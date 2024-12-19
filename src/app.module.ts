import { Module } from '@nestjs/common';
import { BotService } from './bot/bot.servise';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  providers: [BotService, PrismaService],
})
export class AppModule {}
