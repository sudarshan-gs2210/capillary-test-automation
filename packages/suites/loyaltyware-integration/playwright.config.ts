import { PlaywrightTestConfig } from '@playwright/test'
import { config } from 'dotenv'
import { join } from 'path'

const envFile = process.env.ENV_FILE || '.env'
config({ path: join(__dirname, envFile) })

export const playwrightConfig: PlaywrightTestConfig = {
    reporter: 'html',
    use: {
        baseURL: process.env['CAP_CLUSTER'],
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: {
            'content-type': 'application/json',
        },
    },
    testDir: './src/tests',
}

export default playwrightConfig
