import { Request, Response } from 'express';
import { CreateBagItemService } from '../services/CreateBagItemService';
import { CreateBagService } from '../services/CreateBagService';

export class BagController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;
      const createBag = new CreateBagService();

      const bag = await createBag.execute({ customer_id: id });

      return res.json(bag);
    } catch (error) {
      console.log(error);
      return res.status(400).json('Error when execute task ');
    }
  }

  async addItemToBag(req: Request, res: Response): Promise<Response> {
    try {
      const { product_id, name, price, size } = req.body;
      const { id } = req.user;
      const createBagItem = new CreateBagItemService();

      const bag = await createBagItem.execute({
        customer_id: id,
        name: name,
				price: price,
				size: size,
				product_id: product_id
      });

			return res.json(bag);
    } catch (error) {
      console.log(error);
      return res.status(400).json('Error when execute task ');
    }
  }
}
