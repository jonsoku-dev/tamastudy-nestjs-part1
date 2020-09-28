import { EntityRepository, Repository } from 'typeorm/index';
import { BoardEntity } from './entities/board.entity';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
}
