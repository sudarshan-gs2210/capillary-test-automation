import { test, expect } from "@playwright/test";
import { HealthProfileServiceClient } from "../lib/services/health-profile/service-client";

test.describe('Health profile test', () => {
    test('Health Score health check', async () => {
        const response = await HealthProfileServiceClient.getHealthScore();
        expect(response.statusCode).toBe(200);
    })
})