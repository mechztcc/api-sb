import { getCustomRepository } from 'typeorm';
import { Customer } from '../../customer/typeorm/entities/Customer';
import { CustomerRepository } from '../../customer/typeorm/repositories/CustomerRepository';
import { Bag } from '../typeorm/entities/Bag';
import { BagRepository } from '../typeorm/repositories/BagRepositorie';

interface IRequest {
  customer_id: number | string;
}

interface IResponse {
	total: string | number;
}

export class CalculateTotalByBagService {
  async execute({ customer_id }: IRequest): Promise<IResponse> {
    const customerRepository = getCustomRepository(CustomerRepository);

    const bagRepository = getCustomRepository(BagRepository);

    const customer = await customerRepository.findOne({
      where: { id: customer_id },
    });

    const bag = await bagRepository.findOne({
      relations: ['items'],
      where: { customer: customer },
    });

		let total = 0;
    for (let index = 0; index < bag.items.length; index++) {
			const element = bag.items[index];
			
			total += Number(element.price);
		}
			

    return { total: total } as IResponse;
  }
}
