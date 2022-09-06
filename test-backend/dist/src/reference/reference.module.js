"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceModule = void 0;
const common_1 = require("@nestjs/common");
const reference_resolver_1 = require("./reference.resolver");
const retail_service_1 = require("../retail_api/retail.service");
let ReferenceModule = class ReferenceModule {
};
ReferenceModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [reference_resolver_1.ReferenceResolver, retail_service_1.RetailService],
    })
], ReferenceModule);
exports.ReferenceModule = ReferenceModule;
//# sourceMappingURL=reference.module.js.map