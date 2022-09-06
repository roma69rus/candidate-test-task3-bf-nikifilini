import { RetailService } from '../retail_api/retail.service';
import { DeliveryType, OrderStatus, ProductStatus } from '../graphql';
export declare class ReferenceResolver {
    private retailService;
    constructor(retailService: RetailService);
    deliveryTypes(): Promise<DeliveryType[]>;
    productStatuses(): Promise<ProductStatus[]>;
    orderStatuses(): Promise<OrderStatus[]>;
}
