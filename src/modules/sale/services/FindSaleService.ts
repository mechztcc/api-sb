import { getCustomRepository } from 'typeorm';
import { Sale } from '../typeorm/entities/Sale';
import { SalesRepository } from '../typeorm/repositories/SalesRepository';

interface IRequest {
  id: string;
}

export class FindSaleService {
  async execute({ id }: IRequest): Promise<Sale> {
    const salesRepository = getCustomRepository(SalesRepository);

    const sale = await salesRepository.findOne({
      relations: ['customer', 'delivery', 'foodstore', 'sales'],
      where: { id: id },
    });

    return sale;
  }
}
