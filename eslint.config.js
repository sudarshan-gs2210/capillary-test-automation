const nxEslintPlugin = require('@nx/eslint-plugin')
const js = require('@eslint/js')
const ts = require('typescript-eslint')
const jsoncParser = require('jsonc-eslint-parser')
const eslintPluginSonarjs = require('eslint-plugin-sonarjs')

module.exports = [
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },
    {
        plugins: {
            '@nx': nxEslintPlugin,
            sonarjs: eslintPluginSonarjs,
        },
    },
    {
        files: ['**/*.ts', '**/*.js'],
        rules: {
            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
        },
    },
    {
        files: ['*.json'],
        languageOptions: {
            parser: jsoncParser,
        },
    },
    {
        ignores: ['**/*.config.js'],
    },
]
