import { FoodstoreRepository } from '@modules/foodstore/typeorm/repositories/FoodstoreRepository';
import { Product } from '@modules/product/typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { Category } from '../typeorm/entities/Category';
import { CategoryRepository } from '../typeorm/repositories/CategoryRepositories';

interface IRequest {
  id: number | string;
}

export class ListAllCategoriesByFoodstoreWithProducts {
  async execute({ id }: IRequest): Promise<Product[]> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const foodstoreRepository = getCustomRepository(FoodstoreRepository);

    const foodstore = await foodstoreRepository.findOne({ where: { id: id } });

    const categories = await categoryRepository.find({
      where: { foodstore: foodstore },
      select: ['name'],
      relations: ['product'],
    });

    let prods: any[] = [];

    for (let index = 0; index < categories.length; index++) {
      const element = categories[index];

      let { product } = element;

      if(product?.length > 0) {
        for (let index = 0; index < product.length; index++) {
          const el = product[index];
          prods.push(el);
        }
      }
    }

    return prods;
  }
}
