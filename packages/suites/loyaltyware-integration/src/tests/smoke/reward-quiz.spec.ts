import test, { expect } from '@playwright/test'
import { Rewardable_Quiz } from '../../lib/services/rewardable_Activities/quiz/service-clients'

test('Quiz-Health-survey Spec Health Check', async () => {
    const response = await Rewardable_Quiz.postSaveHealthSurvey()

    expect(response.statusCode).toBe(200)
})
