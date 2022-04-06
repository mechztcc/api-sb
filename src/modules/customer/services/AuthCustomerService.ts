import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { Customer } from '../typeorm/entities/Customer';
import { CustomerRepository } from '../typeorm/repositories/CustomerRepository';
import authConfig from '@config/auth';

interface IRequest {
  phone: string;
  password: string;
}

interface IResponse {
  customer: Customer;
  token: string;
}

export class AuthCustomerService {
  async execute({
    phone,
    password,
  }: IRequest): Promise<IResponse> {
    const customersRepository = getCustomRepository(CustomerRepository);

    const customer = await customersRepository.findOne({
      where: { phone: phone },
    });

    const passwordConfirmed = await compare(password, customer.password.toString());
    if (!passwordConfirmed) {
      throw new AppError('Incorrect phone/password combination.', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: String(customer.id),
      expiresIn: authConfig.jwt.expiresIn,
    });
    
    customer.password = undefined;
    
		return { customer, token};
  }
}
