import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContext, AuthContextWithParentChild } from "../../common/auth-context";
import { ENVCONFIG } from "../../../config/envconfig";
import { ENDPOINTS } from "../../../config/endpoints";
import { GETGYMCHECKIN } from "./params/get-gyn-checkin";

export const Gym_checkin = {
  async getGymCheckinProgress(params:GETGYMCHECKIN) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.GYM_CHECKIN_PROGREESS}`,
      params
    });
  },
  async getGymCheckinOverallProgress(params:GETGYMCHECKIN) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.GYM_CHECKIN_OVERALL_PROGRESS}`,
      params
    });
  },
};
