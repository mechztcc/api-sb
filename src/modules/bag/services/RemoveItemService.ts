import { getCustomRepository } from 'typeorm';
import { BagItemRepository } from '../typeorm/repositories/BagItemRepositorie';

interface IRequest {
  item_id: number | string;
}

export class RemoveItemService {
  async execute({ item_id }: IRequest): Promise<void> {
    const bagItemRepository = getCustomRepository(BagItemRepository);

    const bagItem = await bagItemRepository.findOne({ where: { id: item_id } });
    bagItemRepository.remove(bagItem);
  }
}
