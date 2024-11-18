import { ContextBuilder } from '@capillary-test-automation/playwright-lib'
import { APIRequestContext, test as base, expect } from '@playwright/test'
import { OAuthServiceClient } from '../../lib/services/oauth/service-client'
import { ENVCONFIG } from '../../lib/config/envconfig'

const test = base.extend<{
    authContext: APIRequestContext
    authContextWithParentChild: APIRequestContext
}>({
    authContext: [
        async ({}, use) => {
            const token = await OAuthServiceClient.generateToken()
            if (!token) throw new Error('Token generation failed')

            const authContext = await new ContextBuilder()
                .headers({
                    'X-CAP-API-OAUTH-TOKEN': token,
                    'Content-Type': 'application/json',
                })
                .ignoreHTTPSError(true)
                .timeoutInMs(60000)
                .build()

            await use(authContext)
        },
        { auto: true },
    ],

    authContextWithParentChild: [
        async ({}, use) => {
            const parentToken = await OAuthServiceClient.generateToken()
            const childToken = await OAuthServiceClient.generateToken({
                key: ENVCONFIG.CHILD_CLIENT_KEY,
                secret: ENVCONFIG.CHILD_CLIENT_SECRET,
            })

            if (!parentToken && !childToken)
                throw new Error('Token generation failed')

            const authContext = await new ContextBuilder()
                .headers({
                    'X-CAP-API-OAUTH-TOKEN-PARENT': parentToken,
                    'X-CAP-API-OAUTH-TOKEN': childToken,
                    'X-CAP-EXT-ORGID-PARENT': ENVCONFIG.PARENT_ORG_ID,
                    'X-CAP-EXT-ORGID': ENVCONFIG.CHILD_ORG_ID,
                    'Content-Type': 'application/json',
                })
                .ignoreHTTPSError(true)
                .timeoutInMs(60000)
                .build()

            await use(authContext)
        },
        { auto: true },
    ],
})

export { test, expect }
