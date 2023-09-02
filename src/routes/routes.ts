import { Router } from 'express';
import { applyCouponController } from '../controllers/couponcontoller';
import { cartItemController } from '../controllers/cartController';


const route  = Router();

route.get('/coupon/:coupon_code', applyCouponController);
route.get('/cart', cartItemController);

export default route;