import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { v4 } from "uuid";
import { CUSTOMER_MODULE } from "../../modules/user-customer";
import { UserCustomerSerivce } from "../../modules/user-customer/service";
import { DeploymentType, LicenseStatus, PartnershipType } from "../../types/enums";



export async function POST(req: MedusaRequest, res: MedusaResponse) {
       const service: UserCustomerSerivce = req.scope.resolve(CUSTOMER_MODULE);
       const userCustomer = await service.createUser_customers({
              createdAt: new Date(),
              deploymentType: DeploymentType.OnPremise,
              discountPercentage: 20,
              flatFee: 10,
              id: v4(),
              licenseStatus: LicenseStatus.active,
              name: 'test',
              partnershipType: PartnershipType.Integrator,
              platformCost: 10,
              totalCostPerMonth: 5,
              supportPlanType: "unlimited",
              supportCostPerMonth: 10,
              raw_discountPercentage: null,
              raw_flatFee: null,
              raw_platformCost: null,
              raw_supportCostPerMonth: null
       });
       res.send(userCustomer);
}


export async function GET(req: MedusaRequest, res: MedusaResponse) {
       res.send({});
}


export async function PUT(req: MedusaRequest, res: MedusaResponse) {
       res.send({});
}

export async function DELETE(req: MedusaRequest, res: MedusaResponse) {
       res.send({});
}
