import express from 'express';
import { addProduct,removeProduct,singleProduct,listProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Routes for product operations
productRouter.post(
  '/add',adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);

productRouter.post('/remove',adminAuth, removeProduct);
productRouter.post('/single', singleProduct);
productRouter.post('/list', listProduct);

export default productRouter;
