import { Router } from "express";

import { checkoutController } from "../modules/checkout";

const checkoutRoutes = Router();

checkoutRoutes.post("/", (request, response) =>
  checkoutController.handle(request, response)
);

export { checkoutRoutes };
