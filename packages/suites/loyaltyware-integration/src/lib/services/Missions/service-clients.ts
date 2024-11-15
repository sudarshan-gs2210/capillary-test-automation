import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContext } from "../common/auth-context"
import { ENDPOINTS } from "../../config/endpoints";
import { MissionResponse } from "./response"
import { ENVCONFIG } from "../../config/envconfig";

export const MissionServiceClient = {
    async getMission(language, limit, employerId) {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'GET',
            path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION}`,
            params: { language, limit, employerId }
        })
    },
    async getMissionDetail(id, language, employerId) {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'GET',
            path: `${ENDPOINTS.MISSION_DETAILS}`,
            params: { id, language, employerId }
        })
    },
    async getMissionCategories(language: string, type: string, isMissionFilterCategory = true) {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'GET',
            path: `${ENDPOINTS.MISSION_CATEGORIES}`,
            params: { language, type, isMissionFilterCategory }
        })
    },
    async getMissionProgress(missionId, externalFacingId) {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'GET',
            path: `${ENDPOINTS.MISSION_PROGRESS}`,
            params: { missionId, externalFacingId }
        })
    },
    async getMissionTrackingHistory(language, startDate, endDate, missionId, externalFacingId) {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'GET',
            path: `${ENDPOINTS.MISSION_TRACKING_HISTORY}`,
            params: { language, startDate, endDate, missionId, externalFacingId }
        })
    },
    async update_Mission_Progress() {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'POST',
            data: {
                "missionId": "5fe9ed55-bcd7-4b82-8142-13522064cd14",
                "externalFacingId": "parentChildUser101",
                "checkinDate": "2024-10-10",
                "singleDayCheckin": false,
                "progress": 500
            },
            path: `${ENDPOINTS.MISSION_UPDATE_MISSION_PROGRESS}`,

        })
    },
    async mission_Enroll_In() {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'POST',
            data: {

                "missionId": "5fe9ed55-bcd7-4b82-8142-13522064cd14",
                "externalFacingId": "parentChildUser101",
                "employerId": "642c5abb-7d9c-4f90-a29a-aef41b449ef6"

            },
            path: `${ENDPOINTS.MISSION_ENROLL}`,

        })
    },
    async mission_UnEnroll() {
        const authContext = await AuthContext();
        return APIClient(authContext).getResponse<MissionResponse>({
            method: 'POST',
            data: {
                "missionId": "5fe9ed55-bcd7-4b82-8142-13522064cd14",
                "externalFacingId": "parentChildUser101",
                "employerId": "642c5abb-7d9c-4f90-a29a-aef41b449ef6"
            },
            path: `${ENDPOINTS.MISSION_UNENROLL}`,

        })
    }



}


