import { APIClient } from '@capillary-test-automation/playwright-lib'
import { AuthContextWithParentChild } from '../common/auth-context'
import { ENDPOINTS } from '../../config/endpoints'
import { ENVCONFIG } from '../../config/envconfig'
import { getChallengesParam } from './params/get-challenges'

export const Challenges = {
    async getChallengesDetail(params: getChallengesParam) {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.CHALLENGES_DETAIL}`,
            params,
        })
    },
    async getChallengesDetailByCode(params: getChallengesParam) {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.CHALLENGE_DETAIL_BYCODE}`,
            params,
        })
    },
    async postChallengeProgress() {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'POST',
            data: {
                challengeId: 'b1c7c0d9-0fad-4579-949d-c65b9b05cca2',
                externalFacingId: 'voptumTest010',
                checkinDate: '2024-11-05',
                singleDayCheckin: false,
                progress: 1.0,
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.CHALLENGE_PROGRESS}`,
        })
    },
    async postChallengeEnroll() {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'POST',
            data: {
                challengeId: 'dV96MahjwTGnXR3i2tmIQq',
                externalFacingId:
                    'XdNq9zYSrLDIKeR2DWtQZ5G0e924tv7GBTcbA5ktaZw=2000078',
                employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
                isUserCreatedChallenge: true,
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.CHALLENGES_ENROLL}`,
        })
    },
    async postChallengeUnenroll() {
        const authContext = await AuthContextWithParentChild()
        return APIClient(authContext).getResponse<Record<string, any>>({
            method: 'POST',
            data: {
                challengeId: 'V0m7c5GG3qmuJmZAT3iWwq',
                externalFacingId:
                    'WmZq9sWKzM9naWxyJbC5IwwZCQ7pQ71zpBSLI9sHN7g=2000078',
                employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
                isUserCreatedChallenge: true,
            },
            path: `${ENVCONFIG.HOST}${ENDPOINTS.challenges_unenroll}`,
        })
    },
}
