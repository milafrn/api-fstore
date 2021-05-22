import { Router } from "express";

import { productsController } from "../modules/products";

const productsRoutes = Router();

productsRoutes.get("/", (request, response) =>
  productsController.handle(request, response)
);

export { productsRoutes };
