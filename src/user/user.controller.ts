import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:username')
  @ApiOperation({ summary: 'Получить профиль пользователя' })
  async statistics(@Param() params: { username: string }) {
    console.log('Получаю профиль пользователя!!');
    return this.userService.getByUsername(params.username);
  }
}
