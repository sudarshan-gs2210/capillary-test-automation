const baseConfig = require('../../../eslint.config')
const playwright = require('eslint-plugin-playwright')

module.exports = [
    ...baseConfig,
    {
        ...playwright.configs['flat/recommended'],
    },
    {
        files: ['**/*.ts'],
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
]
