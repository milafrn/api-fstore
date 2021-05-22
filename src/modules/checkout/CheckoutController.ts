import axios from "axios";
import dotenv from "dotenv";
import { Response, Request } from "express";

dotenv.config();

const api = axios.create({
  baseURL: "https://api.github.com",
});

class CheckoutController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    console.log(data);
    try {
      const checkout = await api.post(
        `https://five-m.store/api/${process.env.SECRET_API_TOKEN}/checkout`,
        data
      );
      return response.status(201).json(checkout.data).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CheckoutController };
