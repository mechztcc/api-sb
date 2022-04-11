import { CustomerRepository } from '@modules/customer/typeorm/repositories/CustomerRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Bag } from '../typeorm/entities/Bag';
import { BagRepository } from '../typeorm/repositories/BagRepositorie';

interface IRequest {
  customer_id: string | number;
}

export class CreateBagService {
  async execute({ customer_id }: IRequest): Promise<Bag> {
    const bagRepository = getCustomRepository(BagRepository);
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findOne({
      where: { id: customer_id },
    });
    
		if (!customer) {
      throw new AppError('Customer not found ');
    }

		const bag = bagRepository.create({ cutomer: customer });

		await bagRepository.save(bag);

		return bag;
  }
}
