import { describe } from 'node:test'
import { User } from '../../lib/services/user/service-client'
import test, { expect } from '@playwright/test'

describe('User', () => {
    test('User Screen NameSpec Health Check', async () => {
        const response = await User.postScreenName()
        expect(response.statusCode).toBe(200)
    })
    test('User Legal Auth Spec Health Check', async () => {
        const response = await User.getLegalAuth()
        expect(response.statusCode).toBe(200)
    })
    test('User My Activites Spec Health Check', async () => {
        const response = await User.getMyActivites({
            longitude: 233,
            language: 'en',
            latitude: 344,
            externalFacingId:
                'wxEIzMDNAbHPOdaioOFeZnWZmRrSfZ35F8sd%2B0mbTBlm4000231',
            affiliationId: 'f471f843-63a9-45f0-87a5-cf78051ab4ef',
            typeFilter: 'mission',
        })
        expect(response.statusCode).toBe(200)
    })
})
