import { ListAllProductsService } from '@modules/product/services/ListAllProductsService';
import { Request, Response } from 'express';

export class ProductController {
  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const listProducts = new ListAllProductsService();

			const products = await listProducts.execute();

			return res.json(products);

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
}
