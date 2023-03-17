import { Router } from "express";
import ProductController from "./app/controllers/ProductController";


const routes = new Router();


routes.post('/add', ProductController.store);
routes.get('/list', ProductController.index);

export default routes;
