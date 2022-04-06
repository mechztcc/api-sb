import categoryRouter from '@modules/category/routes/categorys.routes';
import customerRouter from '@modules/customer/routes/customers.routes';
import productRouter from '@modules/product/routes/products.routes';
import { Router } from 'express';
import foodstoreRouter from 'src/modules/foodstore/http/routes/foodstore.routes';
import authRouter from 'src/modules/user/routes/auth.routes';
import usersRouter from 'src/modules/user/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/foodstores', foodstoreRouter);
routes.use('/products', productRouter);
routes.use('/categories', categoryRouter);
routes.use('/customers', customerRouter);

export default routes;
