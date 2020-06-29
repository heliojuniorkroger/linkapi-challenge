export type DealStatus =
    | 'open'
    | 'won'
    | 'lost'
    | 'deleted'
    | 'all_not_deleted';

export type Product = {
    id: number;
    name: string;
    quantity: number;
    item_price: number;
};

export type Deal = {
    id: number;
    person_name: string;
    value: number;
    title: string;
    status: DealStatus;
    products: Array<Product>;
};
