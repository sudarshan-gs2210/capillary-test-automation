import {test, expect} from "@playwright/test";
import { BrandRewardServiceClient } from "../../lib/services/brand-reward/service-client";

test("Brand rewards Health check", async () => {
    const response = await BrandRewardServiceClient.getBrandRewards("14");
    expect(response.statusCode).toBe(200);
})