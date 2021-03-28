import { EntityRepository, Repository } from 'typeorm';
import { ArtificialHot } from '../entities/artificial-hot.entity';

@EntityRepository(ArtificialHot)
export class ArtificialHotRepository extends Repository<ArtificialHot> {}