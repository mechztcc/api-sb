import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
}

export class UpdateUserService {
  async execute({ email, password, confirm_password, old_password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('User not found.');
    }

    if (password && !old_password) {
        throw new AppError('Old password is required.');
      }

    if (password !== confirm_password) {
      throw new AppError('Divergent passwords');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError('Old password incorrect.');
      } else {
        user.password = await hash(password, 8);
      }
    }

    
    await usersRepository.save(user);
    
    user.password = undefined;
    return user;

  }
}
