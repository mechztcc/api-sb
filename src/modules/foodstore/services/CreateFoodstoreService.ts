import AppError from '@shared/errors/AppError';
import { resolve } from 'path/posix';
import { UsersRepository } from 'src/modules/user/typeorm/repositories/UsersRepository';
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
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ where: { id: user_id } });
    if (!user) {
      throw new AppError('User not found');
    }

    try {
      const foodstore = foodstoreRepository.create({ name, user: user });
      await foodstoreRepository.save(foodstore);
      return foodstore;
    } catch (error) {
      console.log(error);
    }
  }
}
