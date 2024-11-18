import { test, expect } from "@playwright/test";
import { HealthProfileServiceClient } from "../../lib/services/health-profile/service-client";

test.describe("Health profile test", () => {
  test("Health Score health check", async () => {
    const response = await HealthProfileServiceClient.getHealthScore();
    expect(response.statusCode).toBe(200);
  });
  test("Health Factor health check", async () => {
    const response = await HealthProfileServiceClient.getHealthFactor({
      language: "en",
    });
    expect(response.statusCode).toBe(200);
  });
  test("Health BiometricKPI health check", async () => {
    const response = await HealthProfileServiceClient.getHealthFactor({
      language: "en",
      externalFacingId: "5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI%3D2000078",
    });
    expect(response.statusCode).toBe(200);
  });
});
