import { CategoryRepository } from '@modules/category/typeorm/repositories/CategoryRepositories';
import { UsersRepository } from '@modules/user/typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  categoryId: string | number;
  price: string;
  size: string;
}

export class CreateProductService {
  async execute({
    name,
    size,
    price,
    categoryId,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne({ where: { id: categoryId }});

    const product = productsRepository.create({
      name,
      size,
      price,
      category: category
    });

    return product;
  }
}
