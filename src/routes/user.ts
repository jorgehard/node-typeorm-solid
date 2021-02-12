import { Router } from "express";

import { createUserController } from "../useCases/CreateUser";
import { editUserController } from "../useCases/EditUser";
import { listUserController } from "../useCases/ListUsers";

const routes = Router();

routes.get("/", listUserController.handle);
routes.post("/", createUserController.handle);
routes.put("/:id", editUserController.handle);

export default routes;
