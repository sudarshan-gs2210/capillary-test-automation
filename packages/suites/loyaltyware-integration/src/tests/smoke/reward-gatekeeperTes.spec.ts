import test, { expect } from "@playwright/test";

import { Rewardable_gatekeeperActivites } from "../../lib/services/rewardable_Activities/gatekeeper_Testing/service-clients";
import { describe } from "node:test";
test.describe("Rewardable Gatekeeper check", () => {
  test("Gatekeeper Spec Health Check", async () => {
    const response =
      await Rewardable_gatekeeperActivites.getGatekeeperActivites({
        language: "en",
        externalFacingId: "gatekeeperTester01",
        affiliationId: "66daf591-33fb-4f7c-84ae-f02dcfc07ba8",
        activityType: "available",
      });
    expect(response.statusCode).toBe(200);
  });

  test("Gatekeeper_GetDetail Spec Health Check", async () => {
    const response =
      await Rewardable_gatekeeperActivites.getGatekeeperActivitesDetail({
        language: "en",
        externalFacingId: "gatekeeperTester01",
        affiliationId: "66daf591-33fb-4f7c-84ae-f02dcfc07ba8",
        type: "article",
        id: "0e2ae894-ef30-47b1-87e7-18cc57d77828",
      });
    expect(response.statusCode).toBe(200);
  });
});
