import { Router, Request, Response } from "express";


import IndexController from "../controllers/IndexController";

const routes = Router();

routes.get("/", IndexController.index);

export default routes;
