import { test, expect } from '@playwright/test';
import { OAuthServiceClient } from '../lib/services/oath/service-client';
import { OAuthResponse } from '../lib/services/oath/response';

test('Auth Token Generation Helath Check', async () => {
    const response = await OAuthServiceClient().generateToken();
    expect(response.statusCode).toBe(200);
    expect(response.body.data.accessToken).not.toBeUndefined();
})