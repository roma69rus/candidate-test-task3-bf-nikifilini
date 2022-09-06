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
exports.Order = exports.OrderDelivery = exports.OrderItem = exports.OrderItemOffer = exports.CrmType = void 0;
const class_transformer_1 = require("class-transformer");
class CrmType {
}
exports.CrmType = CrmType;
class OrderItemOffer {
}
exports.OrderItemOffer = OrderItemOffer;
class OrderItem {
}
__decorate([
    class_transformer_1.Type(() => OrderItemOffer),
    __metadata("design:type", OrderItemOffer)
], OrderItem.prototype, "offer", void 0);
exports.OrderItem = OrderItem;
class OrderDelivery {
}
exports.OrderDelivery = OrderDelivery;
class Order {
}
__decorate([
    class_transformer_1.Type(() => OrderDelivery),
    __metadata("design:type", OrderDelivery)
], Order.prototype, "delivery", void 0);
__decorate([
    class_transformer_1.Type(() => OrderItem),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
exports.Order = Order;
//# sourceMappingURL=types.js.map