import axios from "axios";
import dotenv from "dotenv";
import { Response, Request } from "express";

dotenv.config();

const api = axios.create({
  baseURL: "https://api.github.com",
});

class ProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const products = await api.get(
        `https://five-m.store/${process.env.SECRET_API_TOKEN}/products`
      );
      return response.status(200).json(products.data);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ProductsController };
