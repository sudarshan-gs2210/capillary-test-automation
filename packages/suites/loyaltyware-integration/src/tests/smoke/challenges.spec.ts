import test, { expect } from '@playwright/test'
import { Challenges } from '../../lib/services/challenges/service-client'

test.describe('User', () => {
    test('Challenge Detail Health Check', async () => {
        const response = await Challenges.getChallengesDetail({
            id: '163e429f-bbc8-4ff3-a7f7-1f8dcb44a0e3',
            language: 'en',
            employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
        })
        expect(response.statusCode).toBe(200)
    })

    test('Challenge Detail By Code Health Check', async () => {
        const response = await Challenges.getChallengesDetailByCode({
            inviteCode: '0U0RODE6Z',
            language: 'en',
            employerId: '642c5abb-7d9c-4f90-a29a-aef41b449ef6',
            affiliationId: '046dd96f-bb16-47c2-90f8-7a00fc3c544a',
            externalFacingId: 'brendanTestUser10',
        })
        expect(response.statusCode).toBe(200)
    })

    test('Challenge Progress Health Check', async () => {
        const response = await Challenges.postChallengeProgress()

        expect(response.statusCode).toBe(200)
    })

    test('Challenge Enroll Health Check', async () => {
        const response = await Challenges.postChallengeEnroll()

        expect(response.statusCode).toBe(200)
    })

    test('Challenge Unenroll Health Check', async () => {
        const response = await Challenges.postChallengeUnenroll()

        expect(response.statusCode).toBe(200)
    })
})
