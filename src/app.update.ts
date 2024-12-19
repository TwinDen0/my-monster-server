import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { UserService } from './user/user.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly userService: UserService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    const chatId = ctx.message.chat.id;
    const text = ctx.message;
    const userId = String(ctx.from.id);
    const userAvatar = await this.userService.getUserAvatarUrl(
      ctx.from.id,
      this.bot.telegram,
    );

    const user = await this.userService.getUser(userId);

    if (user) {
      console.log('Он уже есть!');
    } else {
      await this.userService.create({
        telegramId: userId,
        username: ctx.from?.username ? ctx.from?.username : '',
        fullName: `${ctx.from?.first_name ? ctx.from?.first_name : ''}${ctx.from?.last_name ? ' ' + ctx.from?.last_name : ''}`,
        userAvatar: userAvatar,
      });
    }

    await ctx.reply(`Hi! ${userId}`);
  }
}
