/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { handleError, errorResponse, successResponse } from '../utils/response';
import { getCartItems } from '../service/cartservice';


export const cartItemController = async (req: Request, res: Response) => {
    try {
        const result = await getCartItems();

         return successResponse(res, 200, 'Cart Items', result);
    } catch (error: any) {
          handleError(error, req);
        return errorResponse(res, 500, 'Server error.');
    }
};