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


export default connection;