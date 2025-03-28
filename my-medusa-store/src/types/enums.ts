export enum DeploymentType {
       RefractedSaaS = "RefractedSaaS",
       RefractedDedicated = "RefractedDedicated",
       OnPremise = "OnPremise",
}

export enum LicenseStatus {
       active = "active",
       pending = "pending",
       expired = "expired",
}

export enum PartnershipType {
       Integrator = "Integrator",
       Reseller = "Reseller",
}

export enum UserLicenseType {
       PenetrationTesterBasic = "PenetrationTesterBasic",
       PenetrationTesterPlus = "PenetrationTesterPlus",
       VulnerabilityManager = "VulnerabilityManager",
}

export enum IntegrationLevel {
       none = "none",
       limited = "limited",
       dataInput = "dataInput",
       full = "full",
}

export enum QueuePriority {
       low = "low",
       high = "high",
}

export enum PricingModel {
       fixed = "fixed",
       tiered = "tiered",
       custom = "custom",
}