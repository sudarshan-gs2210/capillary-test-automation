import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContext, AuthContextWithParentChild } from "../common/auth-context";
import { ENDPOINTS } from "../../config/endpoints";
import { MissionResponse } from "./response";
import { ENVCONFIG } from "../../config/envconfig";
import { GetMissionParams } from "./params/get-mission";

export const MissionServiceClient = {
  async getMission(params: GetMissionParams) {
    const authContext = await AuthContext();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION}`,
      params,
    });
  },
  async getMissionDetail(params: GetMissionParams) {
    const authContext = await AuthContext();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_DETAILS}`,
      params,
    });
  },
  async getMissionCategories(params: GetMissionParams,
    isMissionFilterCategory = true
  ) {
    const authContext = await AuthContext();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_CATEGORIES}`,
      params: {isMissionFilterCategory },
    });
  },
  async getMissionProgress(params: GetMissionParams) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_PROGRESS}`,
      params
    });
  },
  async getMissionTrackingHistory(params: GetMissionParams
  ) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_TRACKING_HISTORY}`,
      params
    });
  },
  async update_Mission_Progress() {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "POST",
      data: {
        missionId: "5fe9ed55-bcd7-4b82-8142-13522064cd14",
        externalFacingId: "parentChildUser101",
        checkinDate: "2024-10-10",
        singleDayCheckin: false,
        progress: 500,
      },
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_UPDATE_MISSION_PROGRESS}`,
    });
  },
  async mission_Enroll_In() {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "POST",
      data: {
        missionId: "5fe9ed55-bcd7-4b82-8142-13522064cd14",
        externalFacingId: "parentChildUser101",
        employerId: "642c5abb-7d9c-4f90-a29a-aef41b449ef6",
      },
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_ENROLL}`,
    });
  },
  async mission_UnEnroll() {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<MissionResponse>({
      method: "POST",
      data: {
        missionId: "5fe9ed55-bcd7-4b82-8142-13522064cd14",
        externalFacingId: "parentChildUser101",
        employerId: "642c5abb-7d9c-4f90-a29a-aef41b449ef6",
      },
      path: `${ENVCONFIG.HOST}${ENDPOINTS.MISSION_UNENROLL}`,
    });
  },
};
