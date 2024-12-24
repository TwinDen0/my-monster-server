import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MonsterController } from './monster.controller';
import { MonsterService } from './monster.service';

@Module({
  controllers: [MonsterController],
  providers: [MonsterService, PrismaService],
  exports: [MonsterService],
})
export class MonsterModule {}
