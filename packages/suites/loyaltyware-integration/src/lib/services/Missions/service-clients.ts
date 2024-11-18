import { APIClient } from '@capillary-test-automation/playwright-lib'
import { AuthContext, AuthContextWithParentChild } from '../common/auth-context'
import { ENDPOINTS } from '../../config/endpoints'
import { MissionResponse } from './response'
import { ENVCONFIG } from '../../config/envconfig'
import { MissionParams } from './params/mission-params'
import { APIRequestContext } from '@playwright/test'

export const MissionServiceClient = (authContext: APIRequestContext) => {
    return {
        async getMission(params: MissionParams) {
            return APIClient(authContext).getResponse<Record<string, any>>({
                method: 'GET',
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION}`,
                params,
            })
        },

        async getMissionDetail(params: MissionParams) {
            const authContext = await AuthContext()
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'GET',
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_DETAILS}`,
                params,
            })
        },

        async getMissionCategories(
            params: MissionParams,
            isMissionFilterCategory = true
        ) {
            const authContext = await AuthContext()
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'GET',
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_CATEGORIES}`,
                params: { isMissionFilterCategory },
            })
        },

        async getMissionProgress(params: MissionParams) {
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'GET',
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_PROGRESS}`,
                params,
            })
        },

        async getMissionTrackingHistory(params: MissionParams) {
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'GET',
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_TRACKING_HISTORY}`,
                params,
            })
        },

        async update_Mission_Progress() {
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'POST',
                data: {
                    missionId: '5fe9ed55-bcd7-4b82-8142-13522064cd14',
                    externalFacingId: 'parentChildUser101',
                    checkinDate: '2024-10-10',
                    singleDayCheckin: false,
                    progress: 500,
                },
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_UPDATE_MISSION_PROGRESS}`,
            })
        },

        async mission_Enroll_In() {
            const authContext = await AuthContextWithParentChild()
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'POST',
                data: {
                    missionId: '5fe9ed55-bcd7-4b82-8142-13522064cd14',
                    externalFacingId: 'parentChildUser101',
                    employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
                },
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_ENROLL}`,
            })
        },

        async mission_UnEnroll() {
            const authContext = await AuthContextWithParentChild()
            return APIClient(authContext).getResponse<MissionResponse>({
                method: 'POST',
                data: {
                    missionId: '5fe9ed55-bcd7-4b82-8142-13522064cd14',
                    externalFacingId: 'parentChildUser101',
                    employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
                },
                path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_UNENROLL}`,
            })
        },
    }
}
