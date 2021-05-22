import axios from "axios";
import dotenv from "dotenv";
import { Response, Request } from "express";

dotenv.config();

const api = axios.create({
  baseURL: "https://api.github.com",
});

class CategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const categories = await api.get(
        `https://five-m.store/api/${process.env.SECRET_API_TOKEN}/categories`
      );
      return response.status(200).json(categories.data);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CategoriesController };
