import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, User } from 'prisma/generated/client';
import { PrismaService } from 'src/prisma.service';
import TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class BotService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    await this.botMessage();
  }

  async botMessage() {
    const bot = new TelegramBot(process.env.BOT_API_TOKEN, { polling: true });

    bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;
      const userId = String(msg.from.id);
      const userAvatar = await this.getUserAvatarUrl(msg.from.id, bot);

      if (text === '/start') {
        const user = await this.getUser(userId);

        if (user) {
          console.log('Он уже есть!');
        } else {
          await this.createUser({
            telegramId: userId,
            username: msg.from?.username ? msg.from?.username : '',
            userAvatar: userAvatar,
            fullName: `${msg.from?.first_name ? msg.from?.first_name : ''} ${msg.from?.last_name ? msg.from?.last_name : ''}`,
          });
        }

        await bot.sendMessage(chatId, 'Я живой!', {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: `Заполни форму ${userId}`,
                  url: 'https://my-monster-client.vercel.app',
                },
              ],
            ],
          },
        });
      }

      // await bot.sendMessage(chatId, 'Я живой!', {
      // 	reply_markup: {
      // 		inline_keyboard: [
      // 			[{ text: 'Заполни форму', web_app: { url: webAppUrl } }],
      // 		],
      // 	},
      // })
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<void> {
    await this.prisma.user.create({
      data,
    });
  }

  async getUser(telegramId: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: { telegramId },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getUserAvatarUrl(userId: number, bot: TelegramBot) {
    const userProfile = await bot.getUserProfilePhotos(userId);

    if (!userProfile.photos.length) {
      return '';
    }

    const fileId = userProfile.photos[0][0].file_id;
    const file = await bot.getFile(fileId);
    const filePatch = file.file_path;

    return `https://api.telegram.org/file/bot${process.env.BOT_API_TOKEN}/${filePatch}`;
  }
}
