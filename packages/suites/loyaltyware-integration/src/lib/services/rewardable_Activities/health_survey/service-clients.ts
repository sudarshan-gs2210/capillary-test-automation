import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContextWithParentChild } from "../../common/auth-context";
import { ENVCONFIG } from "../../../config/envconfig";
import { ENDPOINTS } from "../../../config/endpoints";
import { GETHELATHSURVEY } from "./params/get-health-survey";

export const Rewardable_HealthSurvey = {
  async postSaveHealthSurvey() {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "POST",
      data: {
        id: "b04be8d0-95b2-417f-88a2-084985f61771",
        externalFacingId: "brendanTest01",
        language: "en",
        userTimeZone: "America/New_York",
        affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
        currentSection: "New Section",
        currentQuestion: 1,
        isSectionComplete: false,
        isSurveyComplete: false,
        answers: {
          question1: "Paris",
          question2: ["JavaScript", "HTML", "CSS"],
          question3: "Swift",
          question4: ["Python", "R"],
          question5: ["Kotlin"],
          question6: "Berlin",
          question7: "Water",
        },
      },
      path: `${ENVCONFIG.HOST}${ENDPOINTS.HEALTH_SURVEY}`,
    });
  },

  async getHealthSurvey(params: GETHELATHSURVEY) {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "GET",
      path: `${ENVCONFIG.HOST}${ENDPOINTS.HEALTH_SURVEY_GET}`,
      params,
    });
  },
};
