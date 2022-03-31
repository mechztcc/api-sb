import { UsersRepository } from '@modules/user/typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { FoodStore } from '../typeorm/entities/FoodStore';
import { FoodstoreRepository } from '../typeorm/repositories/FoodstoreRepository';

interface IRequest {
  id: string;
}


export class ListAllFoodstoreByUserService {
  async execute({ id }: IRequest): Promise<FoodStore[]> {
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne({ where: { id: id }});

    const foodstores = await foodstoreRepository.find({
      relations: ['address'],
      where: { user: user },
    });

    return foodstores;
  }
}
