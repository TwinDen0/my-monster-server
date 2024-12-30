import { Injectable } from '@nestjs/common';
import { clearSession } from 'src/app.utils';
import { Context } from 'src/context.interface';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TgUserService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  async addUserCrystalsStep1(ctx: Context) {
    await ctx.reply(
      'Перевод кристаллов пользователю. Введи: telegram Id | кол-во кристаллов',
    );
    ctx.session.type = 'add_user_crystal';
  }

  async addUserCrystalsStep2(message: string, ctx: Context) {
    const parts = message.split('|').map((part) => part.trim());

    const user = await this.userService.getUser(parts[0]);
    const crystals = Number(parts[1]);

    if (!user || !crystals) {
      await ctx.reply(`Введены неверные данные!`);
      await clearSession(ctx);
      return;
    }

    const newUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        crystals: {
          increment: crystals,
        },
      },
    });

    await ctx.reply(
      `Кристаллы успешно переведены! ${newUser.telegramId} ${newUser.fullName} crystals:${newUser.crystals}`,
    );
    await clearSession(ctx);
  }
}
