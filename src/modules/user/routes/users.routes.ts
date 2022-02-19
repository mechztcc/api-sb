import { Router } from 'express'
import { UsersController } from '../http/controllers/UsersController'

const usersController =  new UsersController();

const usersRouter = Router()

usersRouter.post('/create', usersController.create);


export default usersRouter;