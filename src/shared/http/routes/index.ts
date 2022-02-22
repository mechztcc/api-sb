import { Request, Response, Router } from 'express';
import authRouter from 'src/modules/user/routes/auth.routes';
import usersRouter from 'src/modules/user/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);

export default routes;
