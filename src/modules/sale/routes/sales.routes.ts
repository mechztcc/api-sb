import { Router } from "express";
import { SalesController } from "../http/controllers/SalesController";


const salesController = new SalesController();
const salesRouter = Router();

salesRouter.post('/create', salesController.create);

export default salesRouter;