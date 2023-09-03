import { check } from 'express-validator';
import { CouponCode } from '../enum/enum';

const couponParamCheck = check('coupon_code')
    .notEmpty()
    .isIn(Object.values(CouponCode))
    .withMessage('Coupon code is required');

export default couponParamCheck;
