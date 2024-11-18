import test, { expect } from "@playwright/test";
import { Rewardable_Activites } from "../../lib/services/rewardable_Activities/service-client";

test.describe("Rewardable activites", () => {
  test("Rewardable Activites Spec Health Check", async () => {
    const response = await Rewardable_Activites.getAll({
      language: "en",
      externalFacingId: "5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI=2000078",
      affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
      activityType: "available",
    });
    expect(response.statusCode).toBe(200);
  });

  test("Rewardable MyActivites Spec Health Check", async () => {
    const response = await Rewardable_Activites.getAll_MyActivites({
      longitude: 43666,
      language: "en",
      latitude: -12,
      externalFacingId: "WmZq9sWKzM9naWxyJbC5IwwZCQ7pQ71zpBSLI9sHN7g%3D2000078",
      affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
      typeFilter: "challenge",
    });

    expect(response.statusCode).toBe(200);
  });
  test("Rewardable claim Rewards Spec Health Check", async () => {
    const response = await Rewardable_Activites.postClaimRewads({
      id: "00736cbd-1d58-4ca1-85a3-292969b585e9",
      externalFacingId: "quizTestUser100",
    });

    expect(response.statusCode).toBe(200);
  });

  test("Rewardable Rally Stride History Spec Health Check", async () => {
    const response = await Rewardable_Activites.getRallyStrideHistory({
      id: "e671879d-a23c-4d47-9c0e-719ae9b538cf",
      externalFacingId: "andrewTest6",
      affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
      intervalType: "Month",
      intervalDate: "2024-10-09",
    });
    expect(response.statusCode).toBe(200);
  });
});
