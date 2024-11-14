import { APIClient, APIResponse } from "@capillary-test-automation/playwright-lib";
import { OAuthRequest } from "./request";
import { OAuthResponse } from "./response";

export const OAuthServiceClient = () => {
    return {
        async generateToken(): Promise<APIResponse<OAuthResponse>> {
            return APIClient().getResponse({
                path: `v3/oauth/token/generate`,
                method: 'POST',
                data: {
                    key: process.env["CLIENT_KEY"],
                    secret: process.env["CLIENT_SECRET"]
                } as OAuthRequest,
            })
        }
    }
};
