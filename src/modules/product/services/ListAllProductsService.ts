import { UsersRepository } from '@modules/user/typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';


interface IRequest {

}

export class ListAllProductsService {
  async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

		const products = await productsRepository.find({ relations: ['category']});
		return products;
  }
}
