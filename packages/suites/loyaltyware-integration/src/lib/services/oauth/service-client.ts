import { APIClient } from "@capillary-test-automation/playwright-lib";
import { OAuthRequest } from "./request";
import { OAuthResponse } from "./response";
import { ENDPOINTS } from "../../constants/endpoints";
import { ENVCONFIG } from "../../constants/envconfig";

export const OAuthServiceClient = {
    token: undefined as string | undefined,
    expiration: 0,

    async generateToken(): Promise<string> {
        const now = Date.now();

        if (this.token && this.expiration > now) {
            return this.token;
        }

        const response = await APIClient().getResponse<OAuthResponse>({
            path: ENDPOINTS.OAUTH,
            method: 'POST',
            data: {
                key: ENVCONFIG.OAUTH_CLIENT_KEY,
                secret: ENVCONFIG.OAUTH_CLIENT_SECRET
            } as OAuthRequest,
        });

        this.token = response.body.data.accessToken;
        this.expiration = now + response.body.data.ttlSeconds * 1000;

        return this.token;
    }
};

