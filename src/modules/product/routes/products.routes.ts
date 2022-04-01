import isAuthenticated  from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { ProductController } from "../http/controllers/ProductController";


const productController = new ProductController()
const productRouter = Router();

productRouter.get('/list', isAuthenticated, productController.listAll);


export default productRouter;