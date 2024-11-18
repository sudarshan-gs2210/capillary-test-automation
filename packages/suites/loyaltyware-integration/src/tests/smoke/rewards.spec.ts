import test, { expect } from "@playwright/test";
import { Rewards } from "../../lib/services/rewards/service-client";

test.describe("Rewards test", () => {
  test("Rewards Gift Cards health check", async () => {
    const response = await Rewards.getGiftCards({
      page: 1,
      language: "en",
      limit: 100,
      externalFacingId: "5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI%3D2000078",
      affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
    });
    //   console.log(response);

    expect(response.statusCode).toBe(200);
  });
  test("Rewards Redeem Donation health check", async () => {
    const response = await Rewards.postRedeemDonation();
    expect(response.statusCode).toBe(200);
  });
});
