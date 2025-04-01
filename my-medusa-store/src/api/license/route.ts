import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { v4 } from "uuid";
import { LICENSE_MODULE } from "../../modules/license";
import { LicenseService } from "../../modules/license/service";
import { IntegrationLevel, QueuePriority, UserLicenseType } from "../../types/enums";



export async function POST(req: MedusaRequest, res: MedusaResponse) {
       const service: LicenseService = req.scope.resolve(LICENSE_MODULE);
       const license = await service.createLicenses({
              type: UserLicenseType.PenetrationTesterPlus,
              assessments: '',
              assets: 1,
              guestAccounts: 1,
              integrations: IntegrationLevel.dataInput,
              organizations: '',
              pricePerMonth: 1,
              queuePriority: QueuePriority.high,
              maxScansStored: 1,
              scanUploadLimit: '',
              scopesAccess: true
       });
       res.send(license);
}


export async function GET(req: MedusaRequest, res: MedusaResponse) {
       const service: LicenseService = req.scope.resolve(LICENSE_MODULE);
       await service.getLicenseFromExternalApi();
       res.send({
              id: v4(),
              type: "EXTERNAL"
       });
}


export async function PUT(req: MedusaRequest, res: MedusaResponse) {
       res.send({});
}

export async function DELETE(req: MedusaRequest, res: MedusaResponse) {
       res.send({});
}
