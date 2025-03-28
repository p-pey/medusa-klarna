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
exports.UserLicense = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
const user_entity_1 = require("../../entities/user.entity");
const enums_1 = require("../../types/enums");
let UserLicense = class UserLicense {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.users = new core_1.Collection(this);
    }
};
exports.UserLicense = UserLicense;
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], UserLicense.prototype, "id", void 0);
__decorate([
    (0, core_1.Enum)(() => enums_1.UserLicenseType),
    __metadata("design:type", String)
], UserLicense.prototype, "type", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], UserLicense.prototype, "pricePerMonth", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], UserLicense.prototype, "organizations", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], UserLicense.prototype, "assessments", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], UserLicense.prototype, "assets", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Boolean)
], UserLicense.prototype, "scopesAccess", void 0);
__decorate([
    (0, core_1.Enum)(() => enums_1.IntegrationLevel),
    __metadata("design:type", String)
], UserLicense.prototype, "integrations", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], UserLicense.prototype, "scanUploadLimit", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], UserLicense.prototype, "maxScansStored", void 0);
__decorate([
    (0, core_1.Enum)(() => enums_1.QueuePriority),
    __metadata("design:type", String)
], UserLicense.prototype, "queuePriority", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], UserLicense.prototype, "guestAccounts", void 0);
__decorate([
    (0, core_1.OneToMany)(() => user_entity_1.User, (user) => user.license),
    __metadata("design:type", Object)
], UserLicense.prototype, "users", void 0);
exports.UserLicense = UserLicense = __decorate([
    (0, core_1.Entity)()
], UserLicense);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWNlbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3NlcnZpY2VzL3VzZXItbGljZW5zZS91c2VyLWxpY2Vuc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTRGO0FBQzVGLCtCQUEwQjtBQUMxQiw0REFBa0Q7QUFDbEQsNkNBQXFGO0FBRzlFLElBQU0sV0FBVyxHQUFqQixNQUFNLFdBQVc7SUFBakI7UUFFQSxPQUFFLEdBQVcsSUFBQSxTQUFFLEdBQUUsQ0FBQztRQW9DbEIsVUFBSyxHQUFHLElBQUksaUJBQVUsQ0FBTyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQUEsQ0FBQTtBQXZDWSxrQ0FBVztBQUVqQjtJQURDLElBQUEsaUJBQVUsR0FBRTs7dUNBQ0s7QUFHbEI7SUFEQyxJQUFBLFdBQUksRUFBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBZSxDQUFDOzt5Q0FDTDtBQUd2QjtJQURDLElBQUEsZUFBUSxHQUFFOztrREFDWTtBQUd2QjtJQURDLElBQUEsZUFBUSxHQUFFOztrREFDWTtBQUd2QjtJQURDLElBQUEsZUFBUSxHQUFFOztnREFDVTtBQUdyQjtJQURDLElBQUEsZUFBUSxHQUFFOzsyQ0FDSztBQUdoQjtJQURDLElBQUEsZUFBUSxHQUFFOztpREFDWTtBQUd2QjtJQURDLElBQUEsV0FBSSxFQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFnQixDQUFDOztpREFDRztBQUdoQztJQURDLElBQUEsZUFBUSxHQUFFOztvREFDYztBQUd6QjtJQURDLElBQUEsZUFBUSxHQUFFOzttREFDYTtBQUd4QjtJQURDLElBQUEsV0FBSSxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFhLENBQUM7O2tEQUNJO0FBRzlCO0lBREMsSUFBQSxlQUFRLEdBQUU7O2tEQUNZO0FBR3ZCO0lBREMsSUFBQSxnQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7OzBDQUNYO3NCQXRDN0IsV0FBVztJQUR2QixJQUFBLGFBQU0sR0FBRTtHQUNJLFdBQVcsQ0F1Q3ZCIn0=