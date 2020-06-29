import Order from '../models/Order';

export default async (_req: any, res: any) => {
    const orders = await Order.find();
    res.json(orders);
};
