import { ContextBuilder } from "@capillary-test-automation/playwright-lib"
import { OAuthServiceClient } from "../oauth/service-client"

export const AuthContext = async () => {
    const token = await OAuthServiceClient.generateToken();
    if (!token) throw new Error('Token generation failed');

    return new ContextBuilder()
        .headers(
            {
                'X-CAP-API-OAUTH-TOKEN': token,
                'Content-Type': 'application/json'
            })
        .baseURL(`${ENVCONFIG.CAP_CLUSTER}${ENVCONFIG.HOST}`)
        .ignoreHTTPSError(true)
        .timeoutInMs(60000)
        .build();
}