import test, { expect } from '@playwright/test'
import { Rewardable_HealthSurvey } from '../../lib/services/rewardable_Activities/health_survey/service-clients'

test.describe('HealthSurvey Spec Check', () => {
    test('Save-Health-survey Spec Health Check', async () => {
        const response = await Rewardable_HealthSurvey.postSaveHealthSurvey()

        expect(response.statusCode).toBe(200)
    })

    test('Health-survey Spec Health Check', async () => {
        const response = await Rewardable_HealthSurvey.getHealthSurvey({
            id: 'b04be8d0-95b2-417f-88a2-084985f61771',
            type: 'healthSurvey',
            externalFacingId: 'brendanTest01',
            affiliationId: '8b1c2fca-3609-43ee-9764-7ac72a48eb97',
            language: 'en',
            userTimeZone: 'Africa Nairobi',
        })
        console.log(response)

        expect(response.statusCode).toBe(200)
    })
})
