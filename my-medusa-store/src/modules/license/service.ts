import { MedusaService } from "@medusajs/framework/utils";
import { FetchService } from "../../services/FetchService/FetchService";
import { License } from "./models/license.model";



export class LicenseService extends MedusaService({
       license: License
}) {
       constructor(args: any) {
              super(args)
       }
       async getLicenseFromExternalApi() {
              const response = await FetchService({
                     url: 'https://google.com',
                     method: "GET"
              });

              return response.data
       }
}