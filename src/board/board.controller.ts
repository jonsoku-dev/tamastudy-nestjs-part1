import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.interface';
import { CreateBoardDto } from './dto/createBoard.dto';
import { EditBoardDto } from './dto/editBoard.dto';
import { BoardEntity } from './entities/board.entity';
import { UpdateResult } from 'typeorm/index';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/all')
  getBoardList(): Promise<BoardEntity[]> {
    return this.boardService.getBoardList();
  }

  @Get('/:boardId')
  getBoard(@Param('boardId') boardId: string): Promise<BoardEntity> {
    return this.boardService.getBoard(boardId);
  }

  @Post('/create')
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardService.createBoard(createBoardDto);
  }

  @Patch('/:boardId')
  editBoard(
    @Param('boardId') boardId: string,
    @Body() editBoardDto: EditBoardDto,
  ): Promise<string> {
    return this.boardService.editBoard(boardId, editBoardDto);
  }

  @Delete('/:boardId')
  deleteBoard(@Param('boardId') boardId: string): Promise<string> {
    return this.boardService.deleteBoard(boardId);
  }
}
