import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';
import AppError from '@shared/errors/AppError';
import { EtherealMail } from '@config/mail/Etherealmail';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  constructor() {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      active: true
    });
    await usersRepository.save(user);

    await EtherealMail.sendEmail({
      to: { email:  user.email, name: user.name },
      from: { email: 'equipe@email.com', name: 'Equipe' },
      subject: 'Account created',
    });

    return user;
  }
}
