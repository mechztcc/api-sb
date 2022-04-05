import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { CategoryController } from "../http/CategoryController";


const categoryController = new CategoryController()
const categoryRouter = Router();

categoryRouter.post('/create', isAuthenticated, categoryController.create);
categoryRouter.get('/list/foodstore/:id', categoryController.listAllCategoryWithProds);
categoryRouter.get('/find-by-foodstore/:id', categoryController.listAllByFoodstore);
categoryRouter.get('/find-products/foodstore/:id', isAuthenticated, categoryController.listAllProductsByFoodstore);


export default categoryRouter;