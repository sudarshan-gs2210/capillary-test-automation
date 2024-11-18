import test, { expect } from "@playwright/test";
import { Attestation } from "../../lib/services/rewardable_Activities/attestation/service-client";

test("Manual Attestation Spec Health Check", async () => {
  const response = await Attestation.getManualAttestation({
    language: "en",
    id: "535c5d29-01d6-456c-afb2-07af4d21c783",
    externalFacingId: "5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI=2000078",
    affiliationId: "046dd96f-bb16-47c2-90f8-7a00fc3c544a",
    type: "attestation",
  });
  expect(response.statusCode).toBe(200);
});

