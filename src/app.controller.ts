import { Controller, Get } from '@nestjs/common';
import { Users } from '@prisma/client';
import { BotService } from './bot/bot.servise';

@Controller()
export class AppController {
  constructor(private readonly botService: BotService) {}

  @Get('/users')
  async getUsers(): Promise<Users[]> {
    const users = await this.botService.getAllUsers();
    return users.sort((a, b) => b.reputation - a.reputation);
  }
}
