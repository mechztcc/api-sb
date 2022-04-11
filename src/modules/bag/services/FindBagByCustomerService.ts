import { CustomerRepository } from '@modules/customer/typeorm/repositories/CustomerRepository';
import { getCustomRepository } from 'typeorm';
import { Bag } from '../typeorm/entities/Bag';
import { BagRepository } from '../typeorm/repositories/BagRepositorie';

interface IRequest {
  customer_id: string | number;
}

export class FindBagByCustomerService {
  async execute({ customer_id }: IRequest): Promise<Bag> {
    const bagRepository = getCustomRepository(BagRepository);
    const customerRepository = getCustomRepository(CustomerRepository);

    const customer = await customerRepository.findOne({
      where: { id: customer_id },
    });

    const bag = await bagRepository.findOne({
      relations: ['items'],
      where: { customer: customer },
    });

    return bag;
  }
}
