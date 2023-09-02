import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { CouponCode, DiscountTypeEnum } from '../enum/enum';

@Table({
    timestamps: false,
    tableName: 'coupons',
})
export class Coupon extends Model {
    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
    })
    id!: string;

    @Column({
        type: DataType.ENUM(...Object.values(CouponCode)),
        allowNull: false,
        unique: true,
    })
    code!: CouponCode;

    @Column({
        type: DataType.FLOAT,
        allowNull: true,
    })
    minTotalAmount!: number | null;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    minItemCount!: number | null;

    @Column({
        type: DataType.ENUM(...Object.values(DiscountTypeEnum)),
        allowNull: false,
    })
    discountType!: DiscountTypeEnum;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    discountValue!: number;
}
