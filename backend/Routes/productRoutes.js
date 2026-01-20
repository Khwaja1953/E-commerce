import express from "express"
import { addProduct } from "../Controllers/productController.js";
const router = express.Router();

router.post('/addProduct',addProduct)


export default router