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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCouponController = void 0;
const response_1 = require("../utils/response");
const couponservice_1 = require("../service/couponservice");
const cartservice_1 = require("../service/cartservice");
const express_validator_1 = require("express-validator");
const formatErrorMessage_1 = __importDefault(require("../utils/formatErrorMessage"));
const applyCouponController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Input all required fields',
            error: (0, formatErrorMessage_1.default)(errors.array()),
        });
    }
    const couponCode = req.params.coupon_code;
    try {
        const items = yield (0, cartservice_1.getCartItems)();
        const response = yield (0, couponservice_1.applyCouponAndGetAdjustment)(couponCode, items);
        if ('error' in response) {
            return (0, response_1.errorResponse)(res, 400, response.error);
        }
        const { adjustedPrice, discountAmount } = response;
        let message = '';
        if (discountAmount === 0) {
            message = 'No discount applied.';
        }
        else if (discountAmount > 0) {
            message = `You received a discount of $${discountAmount.toFixed(2)}. Your adjusted price is $${adjustedPrice.toFixed(2)}.`;
        }
        return (0, response_1.successResponse)(res, 200, message, {
            adjustedPrice: adjustedPrice.toFixed(2),
            discountAmount: discountAmount.toFixed(2),
        });
    }
    catch (error) {
        (0, response_1.handleError)(error, req);
        return (0, response_1.errorResponse)(res, 500, 'Server error.');
    }
});
exports.applyCouponController = applyCouponController;
//# sourceMappingURL=couponcontoller.js.map