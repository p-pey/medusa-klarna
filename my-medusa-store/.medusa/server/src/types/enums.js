"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingModel = exports.QueuePriority = exports.IntegrationLevel = exports.UserLicenseType = exports.PartnershipType = exports.LicenseStatus = exports.DeploymentType = void 0;
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["RefractedSaaS"] = "RefractedSaaS";
    DeploymentType["RefractedDedicated"] = "RefractedDedicated";
    DeploymentType["OnPremise"] = "OnPremise";
})(DeploymentType || (exports.DeploymentType = DeploymentType = {}));
var LicenseStatus;
(function (LicenseStatus) {
    LicenseStatus["active"] = "active";
    LicenseStatus["pending"] = "pending";
    LicenseStatus["expired"] = "expired";
})(LicenseStatus || (exports.LicenseStatus = LicenseStatus = {}));
var PartnershipType;
(function (PartnershipType) {
    PartnershipType["Integrator"] = "Integrator";
    PartnershipType["Reseller"] = "Reseller";
})(PartnershipType || (exports.PartnershipType = PartnershipType = {}));
var UserLicenseType;
(function (UserLicenseType) {
    UserLicenseType["PenetrationTesterBasic"] = "PenetrationTesterBasic";
    UserLicenseType["PenetrationTesterPlus"] = "PenetrationTesterPlus";
    UserLicenseType["VulnerabilityManager"] = "VulnerabilityManager";
})(UserLicenseType || (exports.UserLicenseType = UserLicenseType = {}));
var IntegrationLevel;
(function (IntegrationLevel) {
    IntegrationLevel["none"] = "none";
    IntegrationLevel["limited"] = "limited";
    IntegrationLevel["dataInput"] = "dataInput";
    IntegrationLevel["full"] = "full";
})(IntegrationLevel || (exports.IntegrationLevel = IntegrationLevel = {}));
var QueuePriority;
(function (QueuePriority) {
    QueuePriority["low"] = "low";
    QueuePriority["high"] = "high";
})(QueuePriority || (exports.QueuePriority = QueuePriority = {}));
var PricingModel;
(function (PricingModel) {
    PricingModel["fixed"] = "fixed";
    PricingModel["tiered"] = "tiered";
    PricingModel["custom"] = "custom";
})(PricingModel || (exports.PricingModel = PricingModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdHlwZXMvZW51bXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ25CLGlEQUErQixDQUFBO0lBQy9CLDJEQUF5QyxDQUFBO0lBQ3pDLHlDQUF1QixDQUFBO0FBQzlCLENBQUMsRUFKVyxjQUFjLDhCQUFkLGNBQWMsUUFJekI7QUFFRCxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDbEIsa0NBQWlCLENBQUE7SUFDakIsb0NBQW1CLENBQUE7SUFDbkIsb0NBQW1CLENBQUE7QUFDMUIsQ0FBQyxFQUpXLGFBQWEsNkJBQWIsYUFBYSxRQUl4QjtBQUVELElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUNwQiw0Q0FBeUIsQ0FBQTtJQUN6Qix3Q0FBcUIsQ0FBQTtBQUM1QixDQUFDLEVBSFcsZUFBZSwrQkFBZixlQUFlLFFBRzFCO0FBRUQsSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3BCLG9FQUFpRCxDQUFBO0lBQ2pELGtFQUErQyxDQUFBO0lBQy9DLGdFQUE2QyxDQUFBO0FBQ3BELENBQUMsRUFKVyxlQUFlLCtCQUFmLGVBQWUsUUFJMUI7QUFFRCxJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDckIsaUNBQWEsQ0FBQTtJQUNiLHVDQUFtQixDQUFBO0lBQ25CLDJDQUF1QixDQUFBO0lBQ3ZCLGlDQUFhLENBQUE7QUFDcEIsQ0FBQyxFQUxXLGdCQUFnQixnQ0FBaEIsZ0JBQWdCLFFBSzNCO0FBRUQsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ2xCLDRCQUFXLENBQUE7SUFDWCw4QkFBYSxDQUFBO0FBQ3BCLENBQUMsRUFIVyxhQUFhLDZCQUFiLGFBQWEsUUFHeEI7QUFFRCxJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDakIsK0JBQWUsQ0FBQTtJQUNmLGlDQUFpQixDQUFBO0lBQ2pCLGlDQUFpQixDQUFBO0FBQ3hCLENBQUMsRUFKVyxZQUFZLDRCQUFaLFlBQVksUUFJdkIifQ==