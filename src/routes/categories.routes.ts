import { Router } from "express";

import { categoriesController } from "../modules/categories";

const categoriesRoutes = Router();

categoriesRoutes.get("/", (request, response) =>
  categoriesController.handle(request, response)
);

export { categoriesRoutes };
