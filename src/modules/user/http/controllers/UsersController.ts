import { Request, Response } from 'express';
import { CreateUserService } from '../../services/CreateUserService';

export class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return res.json(user);
  }
}
