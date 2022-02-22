import { Router } from "express";
import { AuthController } from "../http/controllers/AuthController";


const authRouter = Router();
const authController = new AuthController();


authRouter.post('/', authController.create);


export default authRouter;