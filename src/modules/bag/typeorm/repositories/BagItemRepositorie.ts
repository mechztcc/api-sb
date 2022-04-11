import { EntityRepository, Repository } from 'typeorm';
import { BagItem } from '../entities/BagItem';

@EntityRepository(BagItem)
export class BagItemRepository extends Repository<BagItem> {}
