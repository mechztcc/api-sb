import { Request, Response } from 'express';
import { CreateUserService } from '../../services/CreateUserService';
import { UpdateUserService } from '../../services/UpdateUserService';

export class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return res.json(user);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { email, password, old_password, confirm_password } = req.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({ email, password, old_password, confirm_password });

    return res.json(user);
  }
}
