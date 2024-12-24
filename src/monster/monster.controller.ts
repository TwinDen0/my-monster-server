import { Controller } from '@nestjs/common';
import { MonsterService } from './monster.service';

@Controller('monster')
export class MonsterController {
  constructor(private readonly monsterService: MonsterService) {}
}
