import { Router } from 'express';
const router = Router();
import { getProducts } from '../controllers/productController';

router.get('/', getProducts);

export default router;