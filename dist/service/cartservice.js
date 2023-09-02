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
exports.getCartItems = void 0;
const sampleItems = [
    { name: 'Smartphone', price: 49.99 },
    { name: 'Laptop', price: 9.99 },
    { name: 'Headphones', price: 9.99 },
    { name: 'Tablet', price: 9.99 },
    { name: 'Camera', price: 59.99 },
    { name: 'Smartwatch', price: 14.99 },
    { name: 'Wireless Mouse', price: 29.99 },
];
function getCartItems() {
    return __awaiter(this, void 0, void 0, function* () {
        return sampleItems;
    });
}
exports.getCartItems = getCartItems;
//# sourceMappingURL=cartservice.js.map