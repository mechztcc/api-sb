import { UsersRepository } from '@modules/user/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { FoodStore } from '../typeorm/entities/FoodStore';
import { FoodstoreRepository } from '../typeorm/repositories/FoodstoreRepository';

interface IRequest {
  user_id: string;
}

export class ListAllFoodstoresService {
  async execute({ user_id }: IRequest): Promise<FoodStore[]> {
    const usersRepository = getCustomRepository(UsersRepository);
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    const user = await usersRepository.findOne({ where: { id: user_id } });
    if (!user) {
      throw new AppError('User not found');
    }

    const foodstores = await foodstoreRepository.find({
      where: [{ user: user }],
    });

    return foodstores;
  }
}
