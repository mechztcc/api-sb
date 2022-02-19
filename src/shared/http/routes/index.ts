import { Request, Response, Router } from 'express';
import usersRouter from 'src/modules/user/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;
