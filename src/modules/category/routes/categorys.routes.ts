import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { CategoryController } from "../http/CategoryController";


const categoryController = new CategoryController()
const categoryRouter = Router();

categoryRouter.post('/create', isAuthenticated, categoryController.create);


export default categoryRouter;