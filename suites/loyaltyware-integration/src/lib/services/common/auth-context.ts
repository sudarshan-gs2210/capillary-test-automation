import { ContextBuilder } from "@capillary-test-automation/playwright-lib"
import { OAuthServiceClient } from "../oauth/service-client"

export const AuthContext = async () => {
    const token = await OAuthServiceClient().generateToken();
    if (token.statusCode !== 200) throw new Error('Token generation failed');

    return new ContextBuilder()
        .headers(
            {
                'X-CAP-API-OAUTH-TOKEN': token.body.data.accessToken,
                'Content-Type': 'application/json'
            })
        .baseURL(`${process.env['CAP_CLUSTER']}${process.env['HOST']}`)
        .ignoreHTTPSError(true)
        .timeoutInMs(60000)
        .build();
}