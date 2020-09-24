import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.interface';
import { CreateBoardDto } from './dto/createBoard.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [
    {
      id: '1',
      title: 'sample title',
      desc: 'sample desc',
      view: 0,
    },
  ];

  getBoardList(): Board[] {
    return this.boards;
  }

  getBoard(boardId: string): Board {
    const found = this.boards.find(board => board.id === boardId);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const id = parseInt(this.boards[this.boards.length - 1].id, 10) + 1;
    const newPost = {
      id: String(id),
      title: createBoardDto.title,
      desc: createBoardDto.desc,
      view: 0,
    };
    this.boards = [...this.boards, newPost];
    return newPost;
  }
}
