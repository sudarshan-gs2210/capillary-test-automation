import { APIClient } from '@capillary-test-automation/playwright-lib'
import { AuthContextWithParentChild } from '../common/auth-context'
import { ENVCONFIG } from '../../config/envconfig'
import { ENDPOINTS } from '../../config/endpoints'
import { getRewardsParams } from './params/get-rewardsparams'

export const Rewards = {
    async getGiftCards(params: getRewardsParams) {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            data: {
                challengeId: 'b1c7c0d9-0fad-4579-949d-c65b9b05cca2',
                externalFacingId: 'voptumTest010',
                checkinDate: '2024-11-05',
                singleDayCheckin: false,
                progress: 1.0,
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.REWARDS_GIFTCARDS}`,
            params,
        })
    },
    async postRedeemDonation() {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'POST',
            data: {
                rewardId: '228786',
                externalFacingId:
                    '5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI=2000078',
                language: 'en',
                quantity: 1,
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.REDEEM_DONATION}`,
        })
    },
}
