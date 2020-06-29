import * as express from 'express';
import { PORT } from './constants';
import Mongo from './databases/Mongo';
import getOrders from './routes/getOrders';

const app = express();

app.use(express.json());

const main = () => {
    Mongo.connect();

    app.get('/orders', getOrders);

    app.listen(PORT);
};

main();
