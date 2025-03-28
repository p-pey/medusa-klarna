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
exports.Tenant = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
const customer_entity_1 = require("./customer.entity");
const user_entity_1 = require("./user.entity");
let Tenant = class Tenant {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date();
        this.users = new core_1.Collection(this);
    }
};
exports.Tenant = Tenant;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], Tenant.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Tenant.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], Tenant.prototype, "createdAt", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => customer_entity_1.Customer, { nullable: true, inversedBy: "tenant" }),
    __metadata("design:type", customer_entity_1.Customer)
], Tenant.prototype, "customer", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Tenant.prototype, "customerId", void 0);
__decorate([
    (0, core_1.OneToMany)(() => user_entity_1.User, (user) => user.tenant),
    __metadata("design:type", Object)
], Tenant.prototype, "users", void 0);
exports.Tenant = Tenant = __decorate([
    (0, core_1.Entity)()
], Tenant);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbnRpdGllcy90ZW5hbnQuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFpRztBQUNqRywrQkFBMEI7QUFDMUIsdURBQTZDO0FBQzdDLCtDQUFxQztBQUc5QixJQUFNLE1BQU0sR0FBWixNQUFNLE1BQU07SUFBWjtRQUVBLE9BQUUsR0FBVyxJQUFBLFNBQUUsR0FBRSxDQUFDO1FBTWxCLGNBQVMsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBUzdCLFVBQUssR0FBRyxJQUFJLGlCQUFVLENBQU8sSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUFBLENBQUE7QUFsQlksd0JBQU07QUFFWjtJQURDLElBQUEsaUJBQVUsR0FBRTs7a0NBQ0s7QUFHbEI7SUFEQyxJQUFBLGVBQVEsR0FBRTs7b0NBQ0c7QUFHZDtJQURDLElBQUEsZUFBUSxHQUFFOzhCQUNBLElBQUk7eUNBQWM7QUFHN0I7SUFEQyxJQUFBLGdCQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsMEJBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDOzhCQUN6RCwwQkFBUTt3Q0FBQztBQUdwQjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDVDtBQUdwQjtJQURDLElBQUEsZ0JBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztxQ0FDVjtpQkFqQjdCLE1BQU07SUFEbEIsSUFBQSxhQUFNLEdBQUU7R0FDSSxNQUFNLENBa0JsQiJ9