import { FoodstoreRepository } from '@modules/foodstore/typeorm/repositories/FoodstoreRepository';
import { ProductsRepository } from '@modules/product/typeorm/repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';
import { Category } from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/CategoryRepositories';

interface IRequest {
  name: string;
  actived: boolean;
  foodstore_id: string | number;

}

export class CreateCategoryService {
  async execute({ name, actived, foodstore_id }: IRequest): Promise<Category> {

		const categoryRepository = getCustomRepository(CategoryRepository);
		const foodstoreRepository = getCustomRepository(FoodstoreRepository);

		const foodstore = await foodstoreRepository.findOne({ where: { id: foodstore_id }});

		const category =  categoryRepository.create({ actived: actived, name: name, foodstore: foodstore });

		return category;
	}
}
