import { getCustomRepository } from 'typeorm';
import { FoodStore } from '../typeorm/entities/FoodStore';
import { FoodstoreRepository } from '../typeorm/repositories/FoodstoreRepository';

interface IRequest {
  id: string;
}


export class ListAllFoodstoreByUserService {
  async execute({ id }: IRequest): Promise<FoodStore[]> {
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    const foodstores = await foodstoreRepository.find({
      relations: ['address'],
      where: { userId: id },
    });

    return foodstores;
  }
}
