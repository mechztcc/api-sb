import { CreateCategoryService } from '@modules/category/services/CreateCategoryService';
import { AuthCustomerService } from '@modules/customer/services/AuthCustomerService';
import { CreateCustomerService } from '@modules/customer/services/CreateCustomerService';
import { FindCustomerService } from '@modules/customer/services/FindCustomerService';
import { Request, Response } from 'express';

export class CustomerController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, phone, password, address } = req.body;

      const createCustomer = new CreateCustomerService();

      const customer = await createCustomer.execute({
        name,
        phone,
        password,
        address,
      });

      return res.json(customer);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const findCustomer = new FindCustomerService();

      const customer = await findCustomer.execute({ id: id });

      return res.json(customer);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }

  async auth(req: Request, res: Response): Promise<Response> {
    try {
      const { phone, password } = req.body;

      const authCustomer = new AuthCustomerService();

      const response = await authCustomer.execute({ phone, password });

      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error when execute task ' });
    }
  }
}
