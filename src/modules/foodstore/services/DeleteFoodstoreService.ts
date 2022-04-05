import { getCustomRepository } from "typeorm";
import { FoodstoreRepository } from "../typeorm/repositories/FoodstoreRepository";


interface IRequest {
    id: number | string;
}

export class DeleteFoodstoreService {
    async execute({ id }: IRequest): Promise<void> {
        const foodstoreRepository = getCustomRepository(FoodstoreRepository);

        const foodstore = await foodstoreRepository.findOne({ where: { id: id }});

        await foodstoreRepository.remove(foodstore);
    }
}