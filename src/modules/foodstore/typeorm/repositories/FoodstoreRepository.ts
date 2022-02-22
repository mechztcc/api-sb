import { EntityRepository, Repository } from 'typeorm';
import { FoodStore } from '../entities/FoodStore';


@EntityRepository(FoodStore)
export class FoodstoreRepository extends Repository<FoodStore> {}
