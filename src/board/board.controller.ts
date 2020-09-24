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

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/all')
  getBoardList(): Board[] {
    return this.boardService.getBoardList();
  }

  @Get('/:boardId')
  getBoard(@Param('boardId') boardId: string): Board {
    return this.boardService.getBoard(boardId);
  }

  @Post('/create')
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }

  @Patch('/:boardId')
  editBoard() {
    return {};
  }

  @Delete('/:boardId')
  deleteBoard() {
    return 'success';
  }
}
