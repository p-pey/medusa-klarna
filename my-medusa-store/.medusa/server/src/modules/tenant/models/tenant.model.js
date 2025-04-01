"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenant = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.tenant = utils_1.model.define("tenant", {
    id: utils_1.model.id().primaryKey(),
    // userCustomer: model.belongsTo(() => user_customer, {
    //        mappedBy: "Tenant",
    //        nullable: true,
    // }),
    name: utils_1.model.text(),
    customerId: utils_1.model.text().nullable(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdGVuYW50L21vZGVscy90ZW5hbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBRXJDLFFBQUEsTUFBTSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0lBQ3RDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLHVEQUF1RDtJQUN2RCw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLE1BQU07SUFDTixJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNsQixVQUFVLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUV6QyxDQUFDLENBQUMifQ==