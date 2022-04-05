<<<<<<< HEAD
import { ListAllFoodstoresService } from '@modules/foodstore/services/ListAllFoodstoresService';
=======
import { DeleteFoodstoreService } from '@modules/foodstore/services/DeleteFoodstoreService';
import { FindFoodstoreService } from '@modules/foodstore/services/FindFoodstoreService';
import { ListAllFoodstoreByUserService } from '@modules/foodstore/services/ListAllFoodstoreByUserService';
import { ListAllFoodstoreService } from '@modules/foodstore/services/ListAllFoodstoreService';
>>>>>>> feature/product-category
import { Request, Response } from 'express';
import { CreateFoodstoreService } from '../../services/CreateFoodstoreService';

export class FoodstoreController {
  async create(req: Request, res: Response): Promise<Response> {
<<<<<<< HEAD
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
=======
    try {
      const { name, actived } = req.body;
      const { zip_code, street, number, city, state } = req.body.address;
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
        actived,
      });

      return res.json(foodstore);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
>>>>>>> feature/product-category

  async findDetails(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const findFoodstore = new FindFoodstoreService();

      const foodstore = await findFoodstore.execute({ id: id });
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

  async listAllByUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;

      const ListAllFoodstore = new ListAllFoodstoreByUserService();
      const foodstores = await ListAllFoodstore.execute({ id });

      return res.json(foodstores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const deleteFoodstore = new DeleteFoodstoreService();
      await deleteFoodstore.execute({ id });

      return res.json({ message: 'Foodstore removed! ' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const listAllFoodStores = new ListAllFoodstoresService();

    const foodstores = await listAllFoodStores.execute({ user_id: id });

    return res.json(foodstores);
  }
}
