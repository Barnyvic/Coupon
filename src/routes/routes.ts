import { Router } from 'express';
import { applyCouponController } from '../controllers/couponcontoller';
import { cartItemController } from '../controllers/cartController';
import couponParamCheck from '../validators/validator';


const route  = Router();

route.get('/coupon/:coupon_code', couponParamCheck ,applyCouponController);
route.get('/cart', cartItemController);

export default route;