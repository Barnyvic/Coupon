import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Coupon } from '../models/Coupon';

dotenv.config();



const connection = new Sequelize({
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: false,
    models: [Coupon],
});

// const coupon = [
//     {
//         id: 'f01b056c-9a70-4553-8d3d-a8318810f9d9',
//         code: 'FIXED10',
//         minTotalAmount: 50,
//         minItemCount: 1,
//         discountType: 'fixed',
//         discountValue: 10,
//     },
//     {
//         id: 'f01b032c-6a60-4553-8d3d-a8318810f9d1',
//         code: 'PERCENT10',
//         minTotalAmount: 100,
//         minItemCount: 2,
//         discountType: 'percent',
//         discountValue: 10,
//     },
//     {
//         id: 'f04b032c-6a60-4553-8d3d-a8458810f9d0',
//         code: 'MIXED10',
//         minTotalAmount: 200,
//         minItemCount: 3,
//         discountType: 'best',
//         discountValue: 10,
//     },
//     {
//         id: 'f01d032c-6a60-4553-8f3b-a8317710f0d1',
//         code: 'REJECTED10',
//         minTotalAmount: 1000,
//         minItemCount: 0,
//         discountType: 'best',
//         discountValue: 10,
//     },
// ];

// connection
//     .sync()
//     .then(async () => {
//         await Coupon.bulkCreate(coupon);
//         console.log('Data inserted successfully');
//     })
//     .catch((error) => {
//         console.error('Error inserting data:', error);
//     });

export default connection;