import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService],
  exports: [CollectionService],
})
export class CollectionModule {}
