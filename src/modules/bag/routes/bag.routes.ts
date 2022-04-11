import isAuthenticated from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { BagController } from "../http/BagController";

const bagController = new BagController();
const bagRouter = Router();

bagRouter.post('/create', isAuthenticated, bagController.create);
bagRouter.post('/add-item', isAuthenticated, bagController.addItemToBag);

export default bagRouter;