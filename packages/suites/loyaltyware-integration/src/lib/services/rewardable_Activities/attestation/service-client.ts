import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContext } from "../../common/auth-context";
import { ENVCONFIG } from "../../../config/envconfig";
import { GETATTESTATION } from "./params/get-attestation";
import { ENDPOINTS } from "../../../config/endpoints";

export const Attestation={
    async getManualAttestation(params:GETATTESTATION){
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<Record<string, any>>({
          method: "GET",
          path: `${ENVCONFIG.HOST}${ENDPOINTS.REWARDABLE_GET_DETAIL}`,
          params,
        });
     
    },
    
}