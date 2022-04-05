import { CreateProductService } from '@modules/product/services/CreateProductService';
import { DeleteProductService } from '@modules/product/services/DeleteProductService';
import { ListAllProductsByCategoryService } from '@modules/product/services/ListAllProductsByCategoryService';
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

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, size, price, category_id } = req.body;

      const createProducts = new CreateProductService();

      const product = await createProducts.execute({
        name,
        size,
        price,
        category_id,
      });

      return res.json(product);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async listAllByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const listAllByCategory = new ListAllProductsByCategoryService()

      const products = await listAllByCategory.execute({ id });

      return res.json(products);
      
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deleteProd = new DeleteProductService();

      const prod = await deleteProd.execute({ id: id });
      return res.json(prod);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
}
