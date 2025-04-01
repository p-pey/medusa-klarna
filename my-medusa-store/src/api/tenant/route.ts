import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { v4 } from "uuid";
import { Tenant_MODULE } from "../../modules/tenant";
import { TenantService } from "../../modules/tenant/service";



export async function POST(req: MedusaRequest, res: MedusaResponse) {
       const service: TenantService = req.scope.resolve(Tenant_MODULE);
       const tenant = await service.createTenants({
              id: v4(),
              customerId: v4(),
              name: 'test tenant'
       });
       res.send(tenant);
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
