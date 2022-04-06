import { getCustomRepository } from 'typeorm';
import { Customer } from '../typeorm/entities/Customer';
import { CustomerRepository } from '../typeorm/repositories/CustomerRepository';

interface IRequest {
  id: number | string;
}

export class FindCustomerService {
  async execute({ id }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findOne({
      relations: ['address'],
      where: { id: id },
    });

		customer.password = undefined;

		return customer;
  }
}
