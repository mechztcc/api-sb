import isAuthenticated  from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { FoodstoreController } from "../controllers/FoodstoreController";

const foodstoreController = new FoodstoreController();
const foodstoreRouter = Router();

foodstoreRouter.post('/create', isAuthenticated, foodstoreController.create);
foodstoreRouter.get('/listAll', isAuthenticated, foodstoreController.listAll);

export default foodstoreRouter;