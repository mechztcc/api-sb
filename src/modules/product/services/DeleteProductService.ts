import { CategoryRepository } from '@modules/category/typeorm/repositories/CategoryRepositories';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string | number;
}

export class DeleteProductService {
  async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);
    
    const product = await productsRepository.findOne({ where: { id: id }});

    await productsRepository.remove(product);

    return product;
  }
}
