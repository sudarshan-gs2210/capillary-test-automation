import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContextWithParentChild } from "../common/auth-context"
import { ENDPOINTS } from "../../config/endpoints";
import { ENVCONFIG } from "../../config/envconfig";
import { getHealthParams } from "./params/get-healthparams";

export const HealthProfileServiceClient = {
    async getHealthScore() {
        const context = await AuthContextWithParentChild();
        return APIClient(context).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.HEALTH_SCORE}`
        })
    },
    async getHealthFactor(params:getHealthParams) {
        const context = await AuthContextWithParentChild();
        return APIClient(context).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.HEALTH_FACTOR}`,
            params
        })
    },
    async getBiometricKPI(params:getHealthParams) {
        const context = await AuthContextWithParentChild();
        return APIClient(context).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.HEALTH_BIOMETRIC_KPI}`,
            params
        })
    },


}