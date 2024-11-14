import { APIClient, APIResponse } from "@capillary-test-automation/playwright-lib"
import { PingResponse } from "./response"
import { AuthContext } from "../common/auth-context"

export const HealthCareClient = () => {
    return {
        async ping(): Promise<APIResponse<PingResponse>> {
            const authContext = await AuthContext();
            return APIClient(authContext).getResponse({
                method: 'GET',
                path: `ping`,
            })
        }
    }
}