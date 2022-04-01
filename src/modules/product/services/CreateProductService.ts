import { CategoryRepository } from '@modules/category/typeorm/repositories/CategoryRepositories';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  category_id: string | number;
  price: string;
  size: string;
}

export class CreateProductService {
  async execute({
    name,
    size,
    price,
    category_id,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOne({ where: { id: category_id }});

    const product = productsRepository.create({
      name,
      size,
      price,
      category: category
    });

    productsRepository.save(product);

    return product;
  }
}
