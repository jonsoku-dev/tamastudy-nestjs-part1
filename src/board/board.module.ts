import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
