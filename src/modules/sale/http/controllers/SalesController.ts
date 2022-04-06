import { CreateSaleService } from '@modules/sale/services/CreateSaleService';
import { Request, Response } from 'express';

export class SalesController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { foodstore_id, notes, customer_id, sale_products } = req.body;

      const createSale = new CreateSaleService();

      const sale = await createSale.execute({
        foodstore_id,
        notes,
        customer_id,
        sale_products,
      });

			return res.json(sale);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
}
