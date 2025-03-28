import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { default as TenantService } from "../../services/tenant/tenant-service";
import { default as UserLicenseService } from "../../services/user-license/user-license-service";
import { UserLicenseType } from "../../types/enums";


export async function POST(req: MedusaRequest, res: MedusaResponse) {
       try {
              // Resolve services from the container
              const tenantProvider = req.scope.resolve("tenantProvider") as TenantService;
              const userProvider = req.scope.resolve("userProvider") as UserLicenseService;

              // Step 1: Create a fake tenant (required for User)
              const tenant = await tenantProvider.createTenant("Fake Tenant", "Fake Customer");

              // Step 2: Create a fake user with a license
              const fakeUser = await userProvider.createUser(tenant.id, UserLicenseType.PenetrationTesterPlus);

              // Step 3: Get the user details (optional, for verification)
              const userDetails = await userProvider.getUserById(fakeUser.id);

              // Step 4: Get the license details (optional, for verification)
              const licenseDetails = await userProvider.getLicenseById(fakeUser.license.id);

              // Respond with the created entities
              res.status(201).json({
                     message: "Fake user and license created successfully",
                     tenant: {
                            id: tenant.id,
                            name: tenant.name,
                     },
                     user: userDetails,
                     license: licenseDetails,
              });
       } catch (error) {
              res.status(500).json({
                     message: "Error creating fake user and license",
                     error: error.message,
              });
       }
}


export async function GET() {

}