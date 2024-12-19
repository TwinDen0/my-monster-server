import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppService } from './app.service';
import { AppUpdate } from './app.update';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TelegrafModule.forRoot({
      token: process.env.BOT_API_TOKEN,
    }),
  ],
  providers: [AppUpdate, AppService, PrismaService],
})
export class AppModule {}
