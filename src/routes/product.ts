import express, { Request, Response } from "express";
import productsJson from '../assets/products.json';
import { Product } from "../shared/types";

const router = express.Router();

async function listAll(req: Request, res: Response) {
    const products: Product[] = productsJson;

    res.send(products);
};

router.get("/product", listAll);

export { router as productRoutes };