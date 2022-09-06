import { RetailService } from '../retail_api/retail.service';
export declare class OrdersResolver {
    private retailService;
    constructor(retailService: RetailService);
    order(id: string): Promise<import("src/retail_api/types").Order>;
    getOrders(page: number): Promise<{
        orders: import("src/retail_api/types").Order[];
        pagination: import("src/retail_api/types").RetailPagination;
    }>;
}
