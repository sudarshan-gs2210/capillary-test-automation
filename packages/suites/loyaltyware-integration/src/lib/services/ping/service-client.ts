import { APIClient } from "@capillary-test-automation/playwright-lib"
import { PingResponse } from "./response"
import { AuthContext } from "../common/auth-context"
import { ENDPOINTS } from "../../constants/endpoints"

export const PingClient = {
    async ping() {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<PingResponse>({
            method: 'GET',
            path: ENDPOINTS.PING,
        })
    }
}