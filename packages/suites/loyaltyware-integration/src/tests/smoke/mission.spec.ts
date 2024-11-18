import { test, expect } from '../fixtures/auth-context-fixture'
import { MissionServiceClient } from '../../lib/services/Missions/service-clients'

test.describe('Missions Health Check', () => {
    test('Get Missions', async ({ authContext }) => {
        const response = await MissionServiceClient(authContext).getMission({
            language: 'en',
            limit: 10,
            employerId: '3304044b-bf2b-4c70-97be-ce7f50120848',
        })

        expect(response.statusCode).toBe(200)
    })

    test('Mission Details', async ({ authContext }) => {
        const response = await MissionServiceClient(
            authContext
        ).getMissionDetail({
            id: 'cc2dc303-3998-4343-8772-6b97dada1992',
            language: 'en',
            employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
        })

        expect(response.statusCode).toBe(200)
    })

    test.skip('Activity Category', async ({ authContext }) => {
        const response = await MissionServiceClient(
            authContext
        ).getMissionCategories({
            language: 'en',
            type: 'mission',
        })

        expect(response.statusCode).toBe(200)
    })

    test('Mission Progress', async ({ authContextWithParentChild }) => {
        const response = await MissionServiceClient(
            authContextWithParentChild
        ).getMissionProgress({
            missionId: 'f2bddfb8-cfe8-40e5-b15f-11b3c093befd',
            externalFacingId: '987321',
        })

        expect(response.statusCode).toBe(500)
    })

    test('Tracking History', async ({ authContextWithParentChild }) => {
        const response = await MissionServiceClient(
            authContextWithParentChild
        ).getMissionTrackingHistory({
            language: 'en',
            startDate: '2024-10-01',
            endDate: '2024-10-11',
            missionId: '5fe9ed55-bcd7-4b82-8142-13522064cd14',
            externalFacingId: 'parentChildUser101',
        })

        expect(response.statusCode).toBe(500)
    })

    test('Update Progress', async ({ authContextWithParentChild }) => {
        const response = await MissionServiceClient(
            authContextWithParentChild
        ).update_Mission_Progress()

        expect(response.statusCode).toBe(200)
    })

    test('Enroll', async ({ authContextWithParentChild }) => {
        const response = await MissionServiceClient(
            authContextWithParentChild
        ).mission_Enroll_In()
        expect(response.statusCode).toBe(200)
    })

    test('UnEnroll', async ({ authContextWithParentChild }) => {
        const response = await MissionServiceClient(
            authContextWithParentChild
        ).mission_UnEnroll()
        expect(response.statusCode).toBe(200)
    })
})
