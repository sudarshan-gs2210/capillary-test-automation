import { APIClient } from '@capillary-test-automation/playwright-lib'
import { AuthContext } from '../common/auth-context'
import { ENDPOINTS } from '../../config/endpoints'
import { BrandRewardsResponse } from './response'

export const BrandRewardServiceClient = {
    async getBrandRewards(brandId: string, includeInactive = false) {
        const authContext = await AuthContext()
        return APIClient(authContext).getResponse<BrandRewardsResponse>({
            method: 'GET',
            path: `${ENDPOINTS.BRAND_REWARDS}/${brandId}`,
            params: { includeInactive },
        })
    },
}
