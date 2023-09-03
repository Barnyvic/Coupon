"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const couponcontoller_1 = require("../controllers/couponcontoller");
const cartController_1 = require("../controllers/cartController");
const validator_1 = __importDefault(require("../validators/validator"));
const route = (0, express_1.Router)();
route.get('/coupon/:coupon_code', validator_1.default, couponcontoller_1.applyCouponController);
route.get('/cart', cartController_1.cartItemController);
exports.default = route;
//# sourceMappingURL=routes.js.map