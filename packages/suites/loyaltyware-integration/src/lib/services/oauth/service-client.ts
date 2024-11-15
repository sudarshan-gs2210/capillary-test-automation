import { APIClient } from "@capillary-test-automation/playwright-lib";
import { OAuthRequest } from "./request";
import { OAuthResponse } from "./response";
import { ENDPOINTS } from "../../config/endpoints";
import { ENVCONFIG } from "../../config/envconfig";

export const OAuthServiceClient = {
    tokenStore: {} as Record<string, { token: string; expiration: number } | undefined>,

    async generateToken(data: { key: string, secret: string } = {
        key: ENVCONFIG.PARENT_CLIENT_KEY,
        secret: ENVCONFIG.PARENT_CLIENT_SECRET
    }): Promise<string> {
        const now = Date.now();
        const keySecretCombo = `${data.key}:${data.secret}`;

        const existingTokenData = this.tokenStore[keySecretCombo];

        if (existingTokenData && existingTokenData.expiration > now) {
            return existingTokenData.token;
        }

        const response = await APIClient().getResponse<OAuthResponse>({
            path: ENDPOINTS.OAUTH,
            method: 'POST',
            data: {
                key: data.key,
                secret: data.secret,
            } as OAuthRequest,
        });

        const newToken = response.body.data.accessToken;
        const expiration = now + response.body.data.ttlSeconds * 1000;

        this.tokenStore[keySecretCombo] = { token: newToken, expiration };

        return newToken;
    },
};

