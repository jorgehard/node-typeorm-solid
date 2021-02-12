import { Router } from "express";

const routes = Router();

routes.get("/", () => "A definir");
routes.post("/product", () => "A definir");
routes.delete("product/:id", () => "A definir");
routes.get("/user/:id", () => "A definir");

export default routes;
