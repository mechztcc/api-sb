import { Request, Response } from 'express';
import { CreateFoodstoreService } from '../../services/CreateFoodstoreService';

export class FoodstoreController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, user_id, zip_code, street, number, city, state  } = req.body;

    const createFoodstore = new CreateFoodstoreService();
    
    const foodstore = await createFoodstore.create({ name, user_id, zip_code, street, number, city, state });

    return res.json(foodstore);
  }
}
