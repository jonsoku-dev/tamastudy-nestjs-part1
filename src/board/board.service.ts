import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/createBoard.dto';
import { EditBoardDto } from './dto/editBoard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardEntity } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private readonly boardRepository: BoardRepository,
  ) {}

  getBoardList(): Promise<BoardEntity[]> {
    return this.boardRepository.find();
  }

  getBoard(boardId: string): Promise<BoardEntity> {
    const found = this.boardRepository.findOne({
      where: {
        id: boardId,
      },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardRepository
      .create({
        ...createBoardDto,
      })
      .save();
  }

  async editBoard(
    boardId: string,
    editBoardDto: EditBoardDto,
  ): Promise<string> {
    const found = this.getBoard(boardId);
    if (!found) {
      throw new NotFoundException();
    }
    const result = await this.boardRepository.update(
      { id: boardId },
      editBoardDto,
    );
    if (result.affected === 1) {
      return 'success';
    } else {
      throw new InternalServerErrorException();
    }
  }

  async deleteBoard(boardId: string): Promise<string> {
    const found = this.getBoard(boardId);
    if (!found) {
      throw new NotFoundException();
    }
    const result = await this.boardRepository.delete({ id: boardId });
    if (result.affected === 1) {
      return 'success';
    } else {
      throw new InternalServerErrorException();
    }
  }
}
