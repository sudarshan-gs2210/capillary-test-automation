import { APIClient } from '@capillary-test-automation/playwright-lib'
import { AuthContextWithParentChild } from '../common/auth-context'
import { getUserParam } from './params/get-userparam'
import { ENVCONFIG } from '../../config/envconfig'
import { ENDPOINTS } from '../../config/endpoints'

export const User = {
    async postScreenName() {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'POST',
            data: {
                avatar: 'https://cdn.sanity.io/images/c4naai3b/non-production/2ce32203f1fc0a43cb1108c4fc83491641a93f1f-400x400.png',
                screenName: 'asdfasdfhh60089680',
                externalFacingId:
                    '9ujOE5I4w4i1cpyesD78gO9SMgY78ZAYKuG22eXSmfM=2000078',
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.USER_SCREEN_NAME}`,
        })
    },
    async getLegalAuth() {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            data: {
                avatar: 'https://cdn.sanity.io/images/c4naai3b/non-production/2ce32203f1fc0a43cb1108c4fc83491641a93f1f-400x400.png',
                screenName: 'asdfasdfhh60089667',
                externalFacingId:
                    '9ujOE5I4w4i1cpyesD78gO9SMgY78ZAYKuG22eXSmfM=2000078',
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.USER_LEGAL_AUTH}`,
        })
    },
    async getMyActivites(params: getUserParam) {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.MYACTIVITES}`,
            params,
        })
    },
}
