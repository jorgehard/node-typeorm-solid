import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import productRoutes from "./routes/product";
import authRoutes from "./routes/auth";
import connectionOptions from "./config/connection";

createConnection(connectionOptions).then((connection) => {
  const app = express();
  app.use(express.json())
  app.use(indexRoutes);
  app.use(authRoutes);
  app.use("/user", userRoutes);
  app.use("/product", productRoutes);

  app.listen(3000, () => console.log("Servidor rodando"));
});
