import { DiscountTypeEnum } from '../enum/enum';
import { Coupon } from '../models/Coupon';

export type CouponResponse =
    | {
          adjustedPrice: number;
          discountAmount: number;
      }
    | {
          error: string;
      };

export async function applyCouponAndGetAdjustment(
    code: string,
    items: { name: string; price: number }[]
): Promise<CouponResponse> {
    try {
        const coupon = await Coupon.findOne({ where: { code } });
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

        if (coupon.discountType === DiscountTypeEnum.FIXED) {
            discountAmount = Math.min(coupon.discountValue, totalPrice);
        } else if (coupon.discountType === DiscountTypeEnum.PERCENT) {
            discountAmount = (coupon.discountValue / 100) * totalPrice;
        } else if (coupon.discountType === DiscountTypeEnum.BEST) {
            const percentDiscount = (coupon.discountValue / 100) * totalPrice;
            discountAmount = Math.max(percentDiscount, coupon.discountValue);
            console.log(discountAmount, 'Mixed');
        }

        const adjustedPrice = totalPrice - discountAmount;

        const roundedAdjustedPrice = Number(adjustedPrice.toFixed(2));
        const roundedDiscountAmount = Number(discountAmount.toFixed(2));

        return {
            adjustedPrice: roundedAdjustedPrice,
            discountAmount: roundedDiscountAmount,
        };
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}
