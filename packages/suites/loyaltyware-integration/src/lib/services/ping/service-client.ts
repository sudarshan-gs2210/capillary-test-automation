import { APIClient } from '@capillary-test-automation/playwright-lib'
import { PingResponse } from './response'
import { AuthContext } from '../common/auth-context'
import { ENDPOINTS } from '../../config/endpoints'
import { ENVCONFIG } from '../../config/envconfig'

export const PingClient = {
    async ping() {
        const authContext = await AuthContext()
        return APIClient(authContext).getResponse<PingResponse>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.PING}`,
        })
    },
}
