/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { handleError, errorResponse, successResponse } from '../utils/response';
import { applyCouponAndGetAdjustment } from '../service/couponservice';
import { getCartItems } from '../service/cartservice';

export const applyCouponController = async (req: Request, res: Response) => {
    const couponCode = req.params.coupon_code;
    try {
        const items = await getCartItems();

        const response = await applyCouponAndGetAdjustment(couponCode, items);

        if ('error' in response) {
            return errorResponse(res, 400, response.error); 
        }

        const { adjustedPrice, discountAmount } = response;

        let message = '';
        if (discountAmount === 0) {
            message = 'No discount applied.';
        } else if (discountAmount > 0) {
            message = `You received a discount of $${discountAmount.toFixed(
                2
            )}. Your adjusted price is $${adjustedPrice.toFixed(2)}.`;
        }

        return successResponse(res, 200, message, {
            adjustedPrice: adjustedPrice.toFixed(2),
            discountAmount: discountAmount.toFixed(2),
        });
    } catch (error: any) {
        handleError(error, req);
        return errorResponse(res, 500, 'Server error.');
    }
};
