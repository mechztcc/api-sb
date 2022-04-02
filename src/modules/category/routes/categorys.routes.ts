import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { CategoryController } from "../http/CategoryController";


const categoryController = new CategoryController()
const categoryRouter = Router();

categoryRouter.post('/create', isAuthenticated, categoryController.create);
categoryRouter.get('/findByFoodstore/:id', isAuthenticated, categoryController.listAllByFoodstore);
categoryRouter.get('/find-products/foodstore/:id', isAuthenticated, categoryController.listAllProductsByFoodstore);


export default categoryRouter;