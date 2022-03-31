import isAuthenticated  from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { FoodstoreController } from "../controllers/FoodstoreController";

const foodstoreController = new FoodstoreController();
const foodstoreRouter = Router();

foodstoreRouter.post('/create', isAuthenticated, foodstoreController.create);
foodstoreRouter.get('/list-all', foodstoreController.listAll);
foodstoreRouter.get('/list-all-by-user', isAuthenticated, foodstoreController.listAllByUser);
foodstoreRouter.delete('/delete/:id', isAuthenticated, foodstoreController.delete);

export default foodstoreRouter;