import { Request, Response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { ListAllCategoriesByFoodstore } from '../services/ListAllCategoriesByFoodstoreService';
import { ListAllCategoriesByFoodstoreWithProducts } from '../services/ListAllCategoriesByFoodstoreWithProductsService';
import {
  ListAllCategoriesWithProds
} from '../services/ListAllCategoriesWithProds';

export class CategoryController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, foodstore_id, actived } = req.body;

      const createCategory = new CreateCategoryService();

      const category = await createCategory.execute({
        name,
        foodstore_id,
        actived,
      });

      return res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async listAllByFoodstore(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const listAllCategory = new ListAllCategoriesByFoodstore();

      const foodstores = await listAllCategory.execute({ id });
      return res.json(foodstores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async listAllProductsByFoodstore(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { id } = req.params;

      const listAll = new ListAllCategoriesByFoodstoreWithProducts();

      const foodstores = await listAll.execute({ id: id });
      return res.json(foodstores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async listAllCategoryWithProds(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { id } = req.params;

      const listAll = new ListAllCategoriesWithProds();

      const category = await listAll.execute({ id: id });
      return res.json(category);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
}
