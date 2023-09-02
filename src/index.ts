import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

import connection from './database/connection';
import route from './routes/routes';

dotenv.config();

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/e-commerce', route);

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1`,
    });
});

app.listen(port, async () => {
     await connection.sync();
    return console.log(`Express is listening at http://localhost:${port}`);
});
