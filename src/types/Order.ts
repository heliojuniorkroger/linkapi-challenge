export type Item = {
    codigo: number;
    descricao: string;
    qtde: number;
    vlr_unit: number;
};

export type Order = {
    cliente: string;
    nome: string;
    itens: Array<Item>;
};
