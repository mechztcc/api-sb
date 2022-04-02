import { FoodstoreRepository } from '@modules/foodstore/typeorm/repositories/FoodstoreRepository';
import { getCustomRepository } from 'typeorm';
import { Category } from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/CategoryRepositories';

interface IRequest {
  id: number | string;
}

export class ListAllCategoriesByFoodstoreWithProducts {
  async execute({ id }: IRequest): Promise<Category[]> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    const foodstore = await foodstoreRepository.findOne({ where: { id: id } });

    const categories = await categoryRepository.find({
      where: { foodstore: foodstore },
      select: ['name'],
	    relations: ['product']
    });

    return categories;
  }
}
