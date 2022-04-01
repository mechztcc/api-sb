import productRouter from '@modules/product/routes/products.routes';
import { Request, Response, Router } from 'express';
import foodstoreRouter from 'src/modules/foodstore/http/routes/foodstore.routes';
import authRouter from 'src/modules/user/routes/auth.routes';
import usersRouter from 'src/modules/user/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/foodstores', foodstoreRouter);
routes.use('/products', productRouter);

export default routes;
