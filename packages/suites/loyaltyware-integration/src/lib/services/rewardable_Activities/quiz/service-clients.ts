import { APIClient } from "@capillary-test-automation/playwright-lib";
import { AuthContextWithParentChild } from "../../common/auth-context";
import { ENVCONFIG } from "../../../config/envconfig";
import { ENDPOINTS } from "../../../config/endpoints";

export const Rewardable_Quiz = {
  async postSaveHealthSurvey() {
    const authContext = await AuthContextWithParentChild();
    return APIClient(authContext).getResponse<Record<string, any>>({
      method: "POST",
      data: {
        id: "55fd2afe-4d31-45be-b9a0-1f9bd947a8b1",
        externalFacingId: "quizTestUser100",
        affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
        answers: {
          question1: "Paris",
          question2: ["JavaScript", "HTML", "CSS"],
          question3: "Swift",
          question4: ["Python", "R"],
          question5: ["Kotlin"],
          question6: "Berlin",
        },
      },
      path: `${ENVCONFIG.HOST}${ENDPOINTS.QUIZ}`,
    });
  },
};
