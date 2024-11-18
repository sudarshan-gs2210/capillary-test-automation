import { APIRequestContext } from '@playwright/test'
import { APIRequest } from './types/api-request'
import { APIResponse } from './types/api-response'
import { ContextBuilder } from './api-request-context'

const currentContext = (requestContext?: APIRequestContext) =>
    requestContext ??
    new ContextBuilder().ignoreHTTPSError(true).timeoutInMs(60000).build()

export const APIClient = (requestContext?: APIRequestContext) => {
    return {
        async getResponse<Response>(request: APIRequest) {
            const context = await currentContext(requestContext)
            const response = await context.fetch(request.path, request)
            const responseType = response.headers()['content-type']

            let body: Response | undefined
            let error: string | undefined

            if (response.ok()) {
                body = responseType.includes('text/html')
                    ? ((await response.body()).toString() as Response)
                    : ((await response.json()) as Response)
            } else {
                error = (await response.body()).toString()
            }

            return {
                statusCode: response.status(),
                statusText: response.statusText(),
                body: body,
                error: error,
            } as APIResponse<Response>
        },
    }
}
