import { CrmType, Order, OrdersFilter, RetailPagination } from './types';
export declare class RetailService {
    private readonly axios;
    constructor();
    orders(filter?: OrdersFilter): Promise<[Order[], RetailPagination]>;
    findOrder(id: string): Promise<Order | null>;
    orderStatuses(): Promise<CrmType[]>;
    productStatuses(): Promise<CrmType[]>;
    deliveryTypes(): Promise<CrmType[]>;
}
