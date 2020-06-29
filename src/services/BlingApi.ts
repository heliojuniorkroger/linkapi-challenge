import fetch, { Response } from 'node-fetch';
import * as js2xmlparser from 'js2xmlparser';
import type { Method } from './Request';
import { BLING_API_KEY, BLING_API_URL } from '../constants';
import type { Order } from '../types/Order';

export default class BlingApi {
    private static buildUrlParams(xml: string): string {
        const searchParams: any = new URLSearchParams({
            xml,
            apikey: BLING_API_KEY,
        });
        return searchParams.toString();
    }

    private static request(
        path: string,
        method: Method,
        body?: any
    ): Promise<Response> {
        const urlParams: any = this.buildUrlParams(body);

        return fetch(`${BLING_API_URL}/${path}?${urlParams}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private static parseXmlArrayField(input: any, name: string): any {
        return {
            '@': {
                type: 'array',
            },
            [name]: input,
        };
    }

    public static async createOrder(order: Order): Promise<any> {
        const response = await this.request(
            'pedido/json',
            'POST',
            js2xmlparser.parse('pedido', {
                ...order,
                itens: this.parseXmlArrayField(order.itens, 'item'),
            })
        );

        const data = await response.json();
        if (response.status === 201) {
            return data.retorno.pedidos;
        }

        return data;
    }
}
