import { CategoryRepository } from '@modules/category/typeorm/repositories/CategoryRepositories';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string | number;
}

export class ListAllProductsByCategoryService {
  async execute({ id }: IRequest): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const categoriesRepository = getCustomRepository(CategoryRepository);

    const category = await categoriesRepository.findOne({ where: { id: id } });

    const products = await productsRepository.find({
      where: { category: category },
      relations: [],
    });
    return products;
  }
}
