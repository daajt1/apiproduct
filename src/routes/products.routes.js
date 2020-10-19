import { Router} from 'express';
const router = Router();

import * as productController from '../controllers/products.controller';

router.post('/',productController.createProducts)
router.get('/',productController.getProducts)
router.get('/:productId',productController.getProductById)
router.put('/',productController.updateProductsById)
router.delete('/:productId',productController.deleteProductsById)


export default Router;