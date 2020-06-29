import PipedriveApi from '../services/PipedriveApi';
import BlingApi from '../services/BlingApi';
import type { Deal, Product } from '../types/Deal';
import Order, { IOrder } from '../models/Order';

export default class SyncService {
    public static async sync(): Promise<Array<IOrder>> {
        let deals = await PipedriveApi.getDeals(500, 'won');

        deals = await Promise.all(
            deals.map(async (deal: Deal) => {
                deal.products = await PipedriveApi.getDealProducts(deal.id);
                return deal;
            })
        );

        const orders: Array<any> = await Promise.all(
            deals.map(async (deal: Deal) => {
                const [order] = await BlingApi.createOrder({
                    cliente: deal.person_name,
                    nome: deal.title,
                    itens: deal.products.map((product: Product) => ({
                        codigo: product.id,
                        descricao: product.name,
                        qtde: product.quantity,
                        vlr_unit: product.item_price,
                    })),
                });

                return {
                    bling_id: order.pedido.idPedido,
                    full_price: deal.value,
                };
            })
        );

        const createdOrders: Array<IOrder> = await Order.create(orders);

        return createdOrders;
    }
}
