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
exports.cartItemController = void 0;
const response_1 = require("../utils/response");
const cartservice_1 = require("../service/cartservice");
const cartItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, cartservice_1.getCartItems)();
        return (0, response_1.successResponse)(res, 200, 'Cart Items', result);
    }
    catch (error) {
        (0, response_1.handleError)(error, req);
        return (0, response_1.errorResponse)(res, 500, 'Server error.');
    }
});
exports.cartItemController = cartItemController;
//# sourceMappingURL=cartController.js.map