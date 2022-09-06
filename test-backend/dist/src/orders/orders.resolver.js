"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const retail_service_1 = require("../retail_api/retail.service");
const types_1 = require("../retail_api/types");
let OrdersResolver = class OrdersResolver {
    constructor(retailService) {
        this.retailService = retailService;
    }
    async order(id) {
        return await this.retailService.findOrder(id);
    }
    async getOrders(page) {
        const res = await this.retailService.orders({ page });
        return {
            orders: res[0],
            pagination: res[1]
        };
    }
};
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "order", null);
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "getOrders", null);
OrdersResolver = __decorate([
    graphql_1.Resolver('Orders'),
    __metadata("design:paramtypes", [retail_service_1.RetailService])
], OrdersResolver);
exports.OrdersResolver = OrdersResolver;
//# sourceMappingURL=orders.resolver.js.map