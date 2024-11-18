import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContextWithParentChild } from "../common/auth-context";
import { GETREWARDABLEAVTIVITES } from "./params/get-rewardableactivites";
import { ENVCONFIG } from "../../config/envconfig";
import { ENDPOINTS } from "../../config/endpoints";

export const Rewardable_Activites = {
  async getAll(params: GETREWARDABLEAVTIVITES) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.REWARDABLE_ACTIVITES}`,
      params,
    });
  },

  async getAll_MyActivites(params: GETREWARDABLEAVTIVITES) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MYACTIVITES}`,
      params,
    });
  },
  async postClaimRewads(params: GETREWARDABLEAVTIVITES) {
    const authContext = await AuthContextWithParentChild();

    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "POST",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.REWARDABLE_CLAIM_REWARDS}`,
      params,
    });
  },
  async getRallyStrideHistory(params: GETREWARDABLEAVTIVITES) {
    const authContext = await AuthContextWithParentChild();

    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.RALLY_STRIDE_HISTORY}`,
      params,
    });
  },
};
