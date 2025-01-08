import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Telegram } from 'telegraf';
import { adminButtons } from '../app.buttons';
import { Context } from '../context.interface';

@Injectable()
export class HandlersService {
  constructor(private readonly userService: UserService) {}

  async start(botTgId: Telegram, ctx: Context) {
    const userId = String(ctx.from.id);

    const user = await this.userService.getUser(userId);

    if (user) {
      console.log('Он уже есть!');
    } else {
      const userAvatar = await this.userService.getUserAvatarUrl(
        ctx.from.id,
        botTgId,
      );

      await this.userService.create({
        telegramId: userId,
        username: ctx.from?.username ? ctx.from?.username : '',
        fullName: `${ctx.from?.first_name ? ctx.from?.first_name : ''}${ctx.from?.last_name ? ' ' + ctx.from?.last_name : ''}`,
        userAvatar: userAvatar,
      });
    }

    if (String(ctx.from.id) === process.env.ADMIN_ID) {
      await ctx.reply(
        `Привет админ! ${userId}\nОтчистить контекст: /clear\nИнформация о сессии: /session_data`,
        adminButtons(),
      );
    } else {
      await ctx.reply(`Добро пожаловать в мир My Pet Monster!`);
    }
  }

  async help(ctx: Context) {}

  async sessionData(ctx: Context) {
    await ctx.reply(
      `session.type: ${ctx.session.type}\nsession.text: ${ctx.session.text}`,
    );
  }

  async updatePhoto(botTgId: Telegram, ctx: Context) {
    const userAvatar = await this.userService.getUserAvatarUrl(
      ctx.from.id,
      botTgId,
    );

    userAvatar;
    await this.userService.updatePhoto(String(ctx.from.id), userAvatar);

    await ctx.reply(`Обновил фото!`);
  }
}
