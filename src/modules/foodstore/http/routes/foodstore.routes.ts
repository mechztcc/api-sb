import { Router } from "express";
import { FoodstoreController } from "../controllers/FoodstoreController";

const foodstoreController = new FoodstoreController();
const foodstoreRouter = Router();

foodstoreRouter.post('/create', foodstoreController.create);

export default foodstoreRouter;