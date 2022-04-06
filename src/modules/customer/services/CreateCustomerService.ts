import { AddressRepository } from '@modules/address/typeorm/repositories/AddressRepository';
import { getCustomRepository } from 'typeorm';
import { Address } from '../../address/typeorm/entities/Address';
import { Customer } from '../typeorm/entities/Customer';
import { CustomerRepository } from '../typeorm/repositories/CustomerRepository';
import { hash } from 'bcryptjs';
import { resolve } from 'path';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  phone: string;
  password: string;
  address: Address;
}

export class CreateCustomerService {
  async execute({
    name,
    phone,
    password,
    address,
  }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRepository);
    const addressRepository = getCustomRepository(AddressRepository);

    const phoneExists = await customersRepository.findOne({
      where: { phone: phone },
    });

    if (phoneExists) {
      throw new AppError('Phone already used.');
    }

    const addressCreated = addressRepository.create({
      city: address.city,
      number: address.number,
      state: address.state,
      street: address.state,
      zip_code: address.zip_code,
    });
    await addressRepository.save(addressCreated);

    const hashedPassword = await hash(password, 8);

    const customer = customersRepository.create({
      name: name,
      address: addressCreated,
      phone: phone,
      password: hashedPassword,
    });

		await customersRepository.save(customer);

		return customer;
  }
}
