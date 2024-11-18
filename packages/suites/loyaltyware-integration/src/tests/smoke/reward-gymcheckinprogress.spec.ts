import test, { expect } from '@playwright/test'
import { Gym_checkin } from '../../lib/services/rewardable_Activities/gym-checkin/service-clients'

test.describe('Rewardable Gym Chek', () => {
    test('Gym-checkin progress Spec Health Check', async () => {
        const response = await Gym_checkin.getGymCheckinProgress({
            id: 'c6a63e63-836b-425b-b275-ddef15a1b132',
            language: 'en',
            externalFacingId:
                '5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI%3D2000078',
            affiliationId: '046dd96f-bb16-47c2-90f8-7a00fc3c544a',
        })

        expect(response.statusCode).toBe(200)
    })

    test('Gym-checkin Overall Progress Spec Health Check', async () => {
        const response = await Gym_checkin.getGymCheckinOverallProgress({
            externalFacingId:
                '5oCjabCDOQzShQBlv9SVnqjafMuTb-gkMRi2TWHyvzI%3D2000078&',
            id: 'c6a63e63-836b-425b-b275-ddef15a1b132',
            affiliationId: '046dd96f-bb16-47c2-90f8-7a00fc3c544a',
        })
        expect(response.statusCode).toBe(200)
    })
})
