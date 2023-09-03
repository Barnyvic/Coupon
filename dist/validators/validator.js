"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const enum_1 = require("../enum/enum");
const couponParamCheck = (0, express_validator_1.check)('coupon_code')
    .notEmpty()
    .isIn(Object.values(enum_1.CouponCode))
    .withMessage('Coupon code is required');
exports.default = couponParamCheck;
//# sourceMappingURL=validator.js.map