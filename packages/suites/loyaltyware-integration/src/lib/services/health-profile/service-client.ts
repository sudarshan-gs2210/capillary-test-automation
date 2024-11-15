import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContextWithParentChild } from "../common/auth-context"
import { ENDPOINTS } from "../../config/endpoints";
import { ENVCONFIG } from "../../config/envconfig";

export const HealthProfileServiceClient = {
    async getHealthScore() {
        const context = await AuthContextWithParentChild();
        return APIClient(context).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.HEALTH_SCORE}`
        })
    }
}