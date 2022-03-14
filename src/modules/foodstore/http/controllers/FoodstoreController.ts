import { ListAllFoodstoresService } from '@modules/foodstore/services/ListAllFoodstoresService';
import { Request, Response } from 'express';
import { CreateFoodstoreService } from '../../services/CreateFoodstoreService';

export class FoodstoreController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, zip_code, street, number, city, state, actived } = req.body;
    const { id } = req.user;

    const createFoodstore = new CreateFoodstoreService();

    const foodstore = await createFoodstore.create({
      name,
      user_id: id,
      zip_code,
      street,
      number,
      city,
      state,
      actived
    });

    return res.json(foodstore);
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const listAllFoodStores = new ListAllFoodstoresService();

    const foodstores = await listAllFoodStores.execute({ user_id: id });

    return res.json(foodstores);
  }
}
