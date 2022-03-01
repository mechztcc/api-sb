import AppError from '@shared/errors/AppError';
import authConfig from '../../config/auth';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }

  const [bearer, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);
    // sub is a Id of user
    // Override type Request at src/@types/express/index.d.ts
    // The main object of this changes, is turn visible the id of user, to all request
    // That this method intercep
    const { sub } = decodedToken as ITokenPayload;
    req.user = { id: sub };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token.');
  }
}
