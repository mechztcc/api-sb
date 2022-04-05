import { getCustomRepository } from 'typeorm';
import { FoodStore } from '../typeorm/entities/FoodStore';
import { FoodstoreRepository } from '../typeorm/repositories/FoodstoreRepository';

export class ListAllFoodstoreService {
  async execute(): Promise<FoodStore[]> {
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    const foodstores = await foodstoreRepository.find({
      relations: ['address'],
      where: { actived: true },
    });

    return foodstores;
  }
}
