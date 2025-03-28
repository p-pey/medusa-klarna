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
exports.User = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
const user_license_1 = require("../services/user-license/user-license");
const tenant_entity_1 = require("./tenant.entity");
let User = class User {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date();
    }
};
exports.User = User;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => tenant_entity_1.Tenant),
    __metadata("design:type", tenant_entity_1.Tenant)
], User.prototype, "tenant", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "tenantId", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => user_license_1.UserLicense),
    __metadata("design:type", user_license_1.UserLicense)
], User.prototype, "license", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "licenseId", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
exports.User = User = __decorate([
    (0, core_1.Entity)()
], User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW50aXRpZXMvdXNlci5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBFO0FBQzFFLCtCQUEwQjtBQUMxQix3RUFBb0U7QUFDcEUsbURBQXlDO0FBR2xDLElBQU0sSUFBSSxHQUFWLE1BQU0sSUFBSTtJQUFWO1FBRUEsT0FBRSxHQUFXLElBQUEsU0FBRSxHQUFFLENBQUM7UUFlbEIsY0FBUyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUFBLENBQUE7QUFsQlksb0JBQUk7QUFFVjtJQURDLElBQUEsaUJBQVUsR0FBRTs7Z0NBQ0s7QUFHbEI7SUFEQyxJQUFBLGdCQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsc0JBQU0sQ0FBQzs4QkFDZixzQkFBTTtvQ0FBQztBQUdoQjtJQURDLElBQUEsZUFBUSxHQUFFOztzQ0FDTztBQUdsQjtJQURDLElBQUEsZ0JBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQywwQkFBVyxDQUFDOzhCQUNuQiwwQkFBVztxQ0FBQztBQUd0QjtJQURDLElBQUEsZUFBUSxHQUFFOzt1Q0FDUTtBQUduQjtJQURDLElBQUEsZUFBUSxHQUFFOzhCQUNBLElBQUk7dUNBQWM7ZUFqQnZCLElBQUk7SUFEaEIsSUFBQSxhQUFNLEdBQUU7R0FDSSxJQUFJLENBa0JoQiJ9