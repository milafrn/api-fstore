import express from "express";
import swaggerUi from "swagger-ui-express";

import { categoriesRoutes } from "./routes/categories.routes";
import { checkoutRoutes } from "./routes/checkout.routes";
import { productsRoutes } from "./routes/products.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/checkout", checkoutRoutes);

export { app };
