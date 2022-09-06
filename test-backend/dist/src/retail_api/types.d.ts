export declare type RetailPagination = {
    limit: 20 | 50 | 100 | 250;
    totalCount: number;
    currentPage: number;
    totalPageCount: number;
};
export declare type OrdersFilter = {
    page?: number;
    limit?: 20 | 50 | 100 | 250;
    filter?: {
        numbers?: string[];
        ids?: number[];
        extendedStatus?: string[];
        deliveryTypes?: string[];
        createdAtFrom?: string;
        createdAtTo?: string;
    };
};
export declare class CrmType {
    name: string;
    code: string;
}
export declare type OrderItemProperty = {
    code: string;
    name: string;
    value: string;
};
export declare class OrderItemOffer {
    externalId: string;
    displayName: string;
    article: string;
    properties: {
        [key: string]: {
            value: string;
            code: string;
        };
    };
}
export declare class OrderItem {
    id: number;
    status: string;
    quantity: number;
    offer: OrderItemOffer;
    comment: string;
}
export declare class OrderDelivery {
    code?: string;
}
export declare class Order {
    id: number;
    number: string;
    createdAt: string;
    status: string;
    statusComment: string;
    customerComment: string;
    delivery?: OrderDelivery;
    items: OrderItem[];
    site: string;
    orderType: string;
}
