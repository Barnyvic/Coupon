"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const couponcontoller_1 = require("../controllers/couponcontoller");
const cartController_1 = require("../controllers/cartController");
const route = (0, express_1.Router)();
route.get('/coupon/:coupon_code', couponcontoller_1.applyCouponController);
route.get('/cart', cartController_1.cartItemController);
exports.default = route;
//# sourceMappingURL=routes.js.map