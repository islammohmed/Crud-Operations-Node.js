
import express from 'express';
import {getProducts,AddProduct,updateProduct,deleteProduct} from "./product.controller.js"

const router = express.Router();

router.get('/products',getProducts)

router.post('/product',AddProduct)

router.put('/product',updateProduct)

router.delete('/product',deleteProduct)

export default router