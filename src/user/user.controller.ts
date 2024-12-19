import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:tgId')
  @ApiOperation({ summary: 'Получить профиль пользователя' })
  async statistics(@Param() params: { tgId: string }) {
    console.log('Получаю профиль пользователя!!');
    return this.userService.getUser(params.tgId);
  }
}
