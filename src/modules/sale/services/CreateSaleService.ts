import { AddressRepository } from '@modules/address/typeorm/repositories/AddressRepository';
import { CustomerRepository } from '@modules/customer/typeorm/repositories/CustomerRepository';
import { FoodstoreRepository } from '@modules/foodstore/typeorm/repositories/FoodstoreRepository';
import { getCustomRepository } from 'typeorm';
import { Sale } from '../typeorm/entities/Sale';
import { SaleProduct } from '../typeorm/entities/SaleProduct';
import { SalesProductsRepository } from '../typeorm/repositories/SaleProductRepository';
import { SalesRepository } from '../typeorm/repositories/SalesRepository';

interface IRequest {
  foodstore_id: number | string;
  notes: string;
  customer_id: string | number;
  sale_products: SaleProduct[];
}

export class CreateSaleService {
  async execute({
    foodstore_id,
    notes,
    customer_id,
    sale_products,
  }: IRequest): Promise<Sale> {
    const foodstoresRepository = getCustomRepository(FoodstoreRepository);
    const customersRepository = getCustomRepository(CustomerRepository);
    const saleProdRepository = getCustomRepository(SalesProductsRepository);
    const salesRepository = getCustomRepository(SalesRepository);
    const addressRepository = getCustomRepository(AddressRepository);

    const foodstore = await foodstoresRepository.findOne({
      where: { id: foodstore_id },
    });

    const customer = await customersRepository.findOne({
      relations: ['address'],
      where: { id: customer_id },
    });

    const sale = salesRepository.create({
      foodstore: foodstore,
      customer: customer,
      delivery: customer.address,
      notes: notes
    });

		await salesRepository.save(sale);

		let createdSaleProds: SaleProduct[] = [];
		for (let index = 0; index < sale_products.length; index++) {
			const prod = sale_products[index];

			let saleProd = saleProdRepository.create({
        notes: prod.notes,
        price: prod.price,
        quantity: prod.quantity,
        size: prod.size,
				sale: sale
      });

			let prodcreated = await saleProdRepository.save(saleProd);
			createdSaleProds.push(prodcreated);
		}

		return sale;

  }
}
