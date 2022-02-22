
import { getCustomRepository } from 'typeorm';
import { FoodStore } from '../typeorm/entities/FoodStore';
import { FoodstoreRepository } from '../typeorm/repositories/FoodstoreRepository';

interface IRequest {
  name: string;
  user_id: number;
}

export class CreateFoodstoreService {
  async create({ name, user_id }: IRequest): Promise<FoodStore> {
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);
    // const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    // const foodstore = foodstoreRepository.create({ name, user: user_id });
  }
}
