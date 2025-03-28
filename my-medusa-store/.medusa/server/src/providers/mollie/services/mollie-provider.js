"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mollie_base_1 = __importDefault(require("../core/mollie-base"));
const types_1 = require("../types");
class MollieProviderService extends mollie_base_1.default {
    get paymentCreateOptions() {
        return {};
    }
}
MollieProviderService.identifier = types_1.PaymentProviderKeys.MOLLIE_HOSTED_CHECKOUT;
exports.default = MollieProviderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9sbGllLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9tb2xsaWUvc2VydmljZXMvbW9sbGllLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTZDO0FBQzdDLG9DQUErRDtBQUUvRCxNQUFNLHFCQUFzQixTQUFRLHFCQUFVO0lBRzVDLElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7QUFKTSxnQ0FBVSxHQUFHLDJCQUFtQixDQUFDLHNCQUFzQixDQUFDO0FBT2pFLGtCQUFlLHFCQUFxQixDQUFDIn0=