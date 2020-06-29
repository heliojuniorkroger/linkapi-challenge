import * as mongoose from 'mongoose';
import * as uniqid from 'uniqid';

export interface IOrder extends mongoose.Document {
    bling_id: number;
    full_price: number;
}

const orderSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: uniqid,
        },
        bling_id: Number,
        full_price: Number,
    },
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    }
);

export default mongoose.model<IOrder>('Order', orderSchema);
