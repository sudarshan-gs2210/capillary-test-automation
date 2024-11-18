import { test, expect } from "@playwright/test";
import { PingClient } from "../../lib/services/ping/service-client";

test('Health Check', async () => {
    const response = await PingClient.ping();
    expect(response.statusCode).toBe(200);
    expect(response.body.data[0]['greeting']).toBe('Hello from HealthcareLoyaltywareIntegrations extension!');
})
