import isAuthenticated  from "@shared/middlewares/isAuthenticated";
import { Router } from "express";
import { ProductController } from "../http/controllers/ProductController";


const productController = new ProductController()
const productRouter = Router();

productRouter.get('/list', isAuthenticated, productController.listAll);
productRouter.get('/listByCategory/:id', isAuthenticated, productController.listAllByCategory);
productRouter.post('/create', isAuthenticated, productController.create);
productRouter.delete('/delete/:id', isAuthenticated, productController.delete);


export default productRouter;