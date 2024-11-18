import { test, expect } from '@playwright/test'
import { OAuthServiceClient } from '../../lib/services/oauth/service-client'

test('Auth Token Generation Helath Check', async () => {
    const token = await OAuthServiceClient.generateToken()
    expect(token).not.toBeUndefined()
    expect(token).not.toBe('')
})
