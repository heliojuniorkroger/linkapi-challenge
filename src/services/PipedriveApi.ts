import fetch, { Response } from 'node-fetch';
import {
    PIPEDRIVE_API_TOKEN,
    PIPEDRIVE_COMPANY_DOMAIN_URL,
} from '../constants';
import type { Method } from './Request';
import type { DealStatus } from '../types/Deal';

export default class PipedriveApi {
    private static buildUrlParams(params: any): string {
        const searchParams: any = new URLSearchParams({
            ...params,
            api_token: PIPEDRIVE_API_TOKEN,
        });
        return searchParams.toString();
    }

    private static request(
        path: string,
        params: any,
        method: Method,
        body?: any
    ): Promise<Response> {
        const urlParams: string = this.buildUrlParams(params);

        return fetch(
            `${PIPEDRIVE_COMPANY_DOMAIN_URL}/api/v1/${path}?${urlParams}`,
            {
                method,
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    }

    public static async getDealProducts(id: number) {
        const response = await this.request(
            `deals/${id}/products`,
            null,
            'GET'
        );

        const data = await response.json();
        if (response.status === 200) {
            return data.data;
        }

        return data;
    }

    public static async getDeals(
        limit: number,
        status: DealStatus
    ): Promise<any> {
        const response = await this.request('deals', { limit, status }, 'GET');

        const data = await response.json();
        if (response.status === 200) {
            return data.data;
        }

        return data;
    }
}
