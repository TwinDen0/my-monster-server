import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { AppService } from './app.service';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private readonly appService: AppService,
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    const chatId = ctx.message.chat.id;
    const text = ctx.message;
    const userId = String(ctx.from.id);
    const userAvatar = this.appService.getUserAvatarUrl(
      ctx.from.id,
      this.bot.telegram,
    );

    const user = this.appService.getUserByTgId(userId);

    if (user) {
      console.log('Он уже есть!');
    } else {
      await this.appService.create({
        telegramId: userId,
        username: ctx.from?.username ? ctx.from?.username : '',
        fullName: `${ctx.from?.first_name ? ctx.from?.first_name : ''} ${ctx.from?.last_name ? ctx.from?.last_name : ''}`,
        userAvatar: String(userAvatar),
      });
    }

    await ctx.reply(`Hi! ${user}`);
  }
}
