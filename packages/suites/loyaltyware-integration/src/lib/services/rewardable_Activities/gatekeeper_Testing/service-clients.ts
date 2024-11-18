import { APIClient } from '@capillary-test-automation/playwright-lib'
import {
    AuthContext,
    AuthContextWithParentChild,
} from '../../common/auth-context'
import { GetGateKeeperParams } from './params/get-gatekeeper'
import { ENVCONFIG } from '../../../config/envconfig'
import { ENDPOINTS } from '../../../config/endpoints'

export const Rewardable_gatekeeperActivites = {
    async getGatekeeperActivites(params: GetGateKeeperParams) {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.REWARDABLE_ACTIVITES}`,
            params,
        })
    },
    async getGatekeeperActivitesDetail(params: GetGateKeeperParams) {
        const authContext = await AuthContext()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.REWARDABLE_GET_DETAIL}`,
            params,
        })
    },
}
