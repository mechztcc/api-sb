import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { FoodStore } from "../typeorm/entities/FoodStore";
import { FoodstoreRepository } from "../typeorm/repositories/FoodstoreRepository";

interface IRequest {
    id: number | string;
}

export class FindFoodstoreService {
    async execute({ id}: IRequest): Promise<FoodStore> {
        const foodstoreRepository = getCustomRepository(FoodstoreRepository);

        const foodstore = await foodstoreRepository.findOne({ where: { id: id }, relations: ['address']});
        return foodstore;
    }

}