import { CustomerRepository } from '@modules/customer/typeorm/repositories/CustomerRepository';
import { Product } from '@modules/product/typeorm/entities/Product';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Bag } from '../typeorm/entities/Bag';
import { BagItem } from '../typeorm/entities/BagItem';
import { BagItemRepository } from '../typeorm/repositories/BagItemRepositorie';
import { BagRepository } from '../typeorm/repositories/BagRepositorie';

interface IRequest {
  product_id: string | number;
	name: string;
	price: string;
	size: string;
  customer_id: number | string;
}

export class CreateBagItemService {
  async execute({product_id, name, price, size , customer_id }: IRequest): Promise<Bag> {
    const bagItemRepo = getCustomRepository(BagItemRepository);
    const bagRepo = getCustomRepository(BagRepository);
    const customerRepository = getCustomRepository(CustomerRepository);

    const customer = await customerRepository.findOne({
      where: { id: customer_id },
    });
    if (!customer) {
      throw new AppError('Customer not found ');
    }

    let customer_bag = await bagRepo.findOne({
			relations: ['items'],
      where: { customer: customer_id },
    });

    const bagItem = bagItemRepo.create({
      name: name,
      price: price,
      size: size,
			bag: customer_bag
    });
		await bagItemRepo.save(bagItem);

    customer_bag = await bagRepo.findOne({
			relations: ['items'],
      where: { customer: customer_id },
    });


		return customer_bag;

  }
}
