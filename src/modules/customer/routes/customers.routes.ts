import { Router } from "express";
import { CustomerController } from "../http/controllers/CustomerController";


const customerController = new CustomerController();
const customerRouter = Router();

customerRouter.post('/create', customerController.create);
customerRouter.get('/info/:id', customerController.findOne);

export default customerRouter;