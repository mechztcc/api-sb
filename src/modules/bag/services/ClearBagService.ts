import { CustomerRepository } from '@modules/customer/typeorm/repositories/CustomerRepository';
import { getCustomRepository } from 'typeorm';
import { Bag } from '../typeorm/entities/Bag';
import { BagItemRepository } from '../typeorm/repositories/BagItemRepositorie';
import { BagRepository } from '../typeorm/repositories/BagRepositorie';

interface IRequest {
  customer_id: number | string;
}

export class ClearBagService {
  async execute({ customer_id }: IRequest): Promise<void> {
    const customerRepository = getCustomRepository(CustomerRepository);
    const bagItemRepository = getCustomRepository(BagItemRepository);
    const bagRepository = getCustomRepository(BagRepository);

    const customer = await customerRepository.findOne({
      where: { id: customer_id },
    });

    const bag = await bagRepository.findOne({
      relations: ['items'],
      where: { customer: customer },
    });

		await bagItemRepository.remove(bag.items);

  }
}
