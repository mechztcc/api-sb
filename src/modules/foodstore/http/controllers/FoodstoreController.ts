import { ListAllFoodstoreService } from '@modules/foodstore/services/ListAllFoodstoreService';
import { Request, Response } from 'express';
import { CreateFoodstoreService } from '../../services/CreateFoodstoreService';

export class FoodstoreController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
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
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const ListAllFoodstore = new ListAllFoodstoreService();
      const foodstores = await ListAllFoodstore.execute();

      return res.json(foodstores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
}
