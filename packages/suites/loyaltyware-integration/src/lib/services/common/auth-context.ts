import { ContextBuilder } from "@capillary-test-automation/playwright-lib"
import { OAuthServiceClient } from "../oauth/service-client"
import { ENVCONFIG } from "../../config/envconfig";

export const AuthContext = async () => {
    const token = await OAuthServiceClient.generateToken();
    if (!token) throw new Error('Token generation failed');

    return new ContextBuilder()
        .headers(
            {
                'X-CAP-API-OAUTH-TOKEN': token,
                'Content-Type': 'application/json'
            })
        .ignoreHTTPSError(true)
        .timeoutInMs(60000)
        .build();
}

export const AuthContextWithParentChild = async () => {
    const parentToken = await OAuthServiceClient.generateToken();
    const childToken = await OAuthServiceClient.generateToken({
        key: ENVCONFIG.CHILD_CLIENT_KEY,
        secret: ENVCONFIG.CHILD_CLIENT_SECRET
    });

    if (!parentToken && !childToken) throw new Error('Token generation failed');

    return new ContextBuilder()
        .headers(
            {
                'X-CAP-API-OAUTH-TOKEN-PARENT': parentToken,
                'X-CAP-API-OAUTH-TOKEN': childToken,
                'X-CAP-EXT-ORGID-PARENT': ENVCONFIG.PARENT_ORG_ID,
                'X-CAP-EXT-ORGID': ENVCONFIG.CHILD_ORG_ID,
                'Content-Type': 'application/json'
            })
        .ignoreHTTPSError(true)
        .timeoutInMs(60000)
        .build();
}