import { FoodstoreRepository } from '@modules/foodstore/typeorm/repositories/FoodstoreRepository';
import { Product } from '@modules/product/typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { Category } from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/CategoryRepositories';

interface IRequest {
  id: number | string;
}

export class ListAllCategoriesWithProds {
  async execute({ id }: IRequest): Promise<Category[]> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    const foodstore = await foodstoreRepository.findOne({ where: { id: id } });

    const categories = await categoryRepository.find({
      where: { foodstore: foodstore },
      select: ['id', 'name'],
      relations: ['product'],
    });

    return categories;
  }
}
