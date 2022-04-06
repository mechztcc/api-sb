import { Router } from "express";
import { SalesController } from "../http/controllers/SalesController";


const salesController = new SalesController();
const salesRouter = Router();

salesRouter.post('/create', salesController.create);
salesRouter.get('/info/:id', salesController.info);

export default salesRouter;