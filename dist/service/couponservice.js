"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCouponAndGetAdjustment = void 0;
const enum_1 = require("../enum/enum");
const Coupon_1 = require("../models/Coupon");
function applyCouponAndGetAdjustment(code, items) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const coupon = yield Coupon_1.Coupon.findOne({ where: { code } });
            if (!coupon) {
                return { error: 'Coupon not found' };
            }
            const totalPrice = items.reduce((total, item) => total + item.price, 0);
            if (coupon.minTotalAmount && totalPrice < coupon.minTotalAmount) {
                return {
                    error: `Cart total price must be greater than $${coupon.minTotalAmount} before discounts`,
                };
            }
            if (coupon.minItemCount && items.length < coupon.minItemCount) {
                return {
                    error: `Cart must contain at least ${coupon.minItemCount} items`,
                };
            }
            let discountAmount = 0;
            if (coupon.discountType === enum_1.DiscountTypeEnum.FIXED) {
                discountAmount = Math.min(coupon.discountValue, totalPrice);
            }
            else if (coupon.discountType === enum_1.DiscountTypeEnum.PERCENT) {
                discountAmount = (coupon.discountValue / 100) * totalPrice;
            }
            else if (coupon.discountType === enum_1.DiscountTypeEnum.BEST) {
                const percentDiscount = (coupon.discountValue / 100) * totalPrice;
                discountAmount = Math.max(percentDiscount, coupon.discountValue);
            }
            const adjustedPrice = totalPrice - discountAmount;
            const roundedAdjustedPrice = Number(adjustedPrice.toFixed(2));
            const roundedDiscountAmount = Number(discountAmount.toFixed(2));
            return {
                adjustedPrice: roundedAdjustedPrice,
                discountAmount: roundedDiscountAmount,
            };
        }
        catch (error) {
            console.error(error);
            throw new Error('Internal Server Error');
        }
    });
}
exports.applyCouponAndGetAdjustment = applyCouponAndGetAdjustment;
//# sourceMappingURL=couponservice.js.map