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
exports.Customer = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
const enums_1 = require("../types/enums");
const tenant_entity_1 = require("./tenant.entity");
let Customer = class Customer {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.licenseStatus = enums_1.LicenseStatus.pending;
        this.totalCostPerMonth = 0;
        this.createdAt = new Date();
    }
};
exports.Customer = Customer;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, core_1.Enum)(() => enums_1.DeploymentType),
    __metadata("design:type", String)
], Customer.prototype, "deploymentType", void 0);
__decorate([
    (0, core_1.Enum)(() => enums_1.LicenseStatus),
    __metadata("design:type", String)
], Customer.prototype, "licenseStatus", void 0);
__decorate([
    (0, core_1.OneToOne)(() => tenant_entity_1.Tenant, (tenant) => tenant.customer, { nullable: true, owner: true }),
    __metadata("design:type", tenant_entity_1.Tenant)
], Customer.prototype, "tenant", void 0);
__decorate([
    (0, core_1.Enum)(() => enums_1.PartnershipType),
    __metadata("design:type", String)
], Customer.prototype, "partnershipType", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Number)
], Customer.prototype, "discountPercentage", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Number)
], Customer.prototype, "platformCost", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Number)
], Customer.prototype, "flatFee", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "supportPlanType", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", Number)
], Customer.prototype, "supportCostPerMonth", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], Customer.prototype, "totalCostPerMonth", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
exports.Customer = Customer = __decorate([
    (0, core_1.Entity)()
], Customer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VudGl0aWVzL2N1c3RvbWVyLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBK0U7QUFDL0UsK0JBQTBCO0FBQzFCLDBDQUFnRjtBQUNoRixtREFBeUM7QUFHbEMsSUFBTSxRQUFRLEdBQWQsTUFBTSxRQUFRO0lBQWQ7UUFFQSxPQUFFLEdBQVcsSUFBQSxTQUFFLEdBQUUsQ0FBQztRQVNsQixrQkFBYSxHQUFrQixxQkFBYSxDQUFDLE9BQU8sQ0FBQztRQXdCckQsc0JBQWlCLEdBQVksQ0FBQyxDQUFDO1FBRy9CLGNBQVMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FBQSxDQUFBO0FBdkNZLDRCQUFRO0FBRWQ7SUFEQyxJQUFBLGlCQUFVLEdBQUU7O29DQUNLO0FBR2xCO0lBREMsSUFBQSxlQUFRLEdBQUU7O3NDQUNHO0FBR2Q7SUFEQyxJQUFBLFdBQUksRUFBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBYyxDQUFDOztnREFDSztBQUdoQztJQURDLElBQUEsV0FBSSxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFhLENBQUM7OytDQUMyQjtBQUdyRDtJQURDLElBQUEsZUFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFDNUUsc0JBQU07d0NBQUM7QUFHaEI7SUFEQyxJQUFBLFdBQUksRUFBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBZSxDQUFDOztpREFDTTtBQUdsQztJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztvREFDRDtBQUc1QjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs4Q0FDUDtBQUd0QjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDWjtBQUdqQjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztpREFDSjtBQUd6QjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxREFDQTtBQUc3QjtJQURDLElBQUEsZUFBUSxHQUFFOzttREFDb0I7QUFHL0I7SUFEQyxJQUFBLGVBQVEsR0FBRTs4QkFDQSxJQUFJOzJDQUFjO21CQXRDdkIsUUFBUTtJQURwQixJQUFBLGFBQU0sR0FBRTtHQUNJLFFBQVEsQ0F1Q3BCIn0=