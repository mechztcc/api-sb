import { AddressRepository } from '@modules/address/typeorm/repositories/AddressRepository';
import AppError from '@shared/errors/AppError';
import { UsersRepository } from 'src/modules/user/typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { FoodStore } from '../typeorm/entities/FoodStore';
import { FoodstoreRepository } from '../typeorm/repositories/FoodstoreRepository';

interface IRequest {
  name: string;
  user_id: string;
  zip_code: string;
  street: string;
  number: string;
  city: string;
  state: string;
  actived: boolean
}

export class CreateFoodstoreService {
  async create({
    name,
    user_id,
    zip_code,
    street,
    number,
    city,
    state,
    actived
  }: IRequest): Promise<FoodStore> {
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);
    const usersRepository = getCustomRepository(UsersRepository);
    const addressRepository = getCustomRepository(AddressRepository);

    try {
      const user = await usersRepository.findOne({ where: { id: user_id } });
      if (!user) {
        throw new AppError('User not found');
      }
      const address = addressRepository.create({
        zip_code,
        street,
        number,
        city,
        state
      });
      await addressRepository.save(address);

      const foodstore = foodstoreRepository.create({
        name,
        user: user,
        address: address,
        actived: actived
      });

      await foodstoreRepository.save(foodstore);

      return foodstore;
    } catch (error) {
      console.log(error);

      
    }
  }
}
