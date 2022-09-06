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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const retail_service_1 = require("../retail_api/retail.service");
let ReferenceResolver = class ReferenceResolver {
    constructor(retailService) {
        this.retailService = retailService;
    }
    async deliveryTypes() {
        return this.retailService.deliveryTypes();
    }
    async productStatuses() {
        return this.retailService.productStatuses();
    }
    async orderStatuses() {
        return this.retailService.orderStatuses();
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReferenceResolver.prototype, "deliveryTypes", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReferenceResolver.prototype, "productStatuses", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReferenceResolver.prototype, "orderStatuses", null);
ReferenceResolver = __decorate([
    graphql_1.Resolver('Reference'),
    __metadata("design:paramtypes", [retail_service_1.RetailService])
], ReferenceResolver);
exports.ReferenceResolver = ReferenceResolver;
//# sourceMappingURL=reference.resolver.js.map