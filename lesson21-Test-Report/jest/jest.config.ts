import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    extensionsToTreatAsEsm: ['.ts'],
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    },
    testPathIgnorePatterns: ['./dist'],
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: ['**/specs/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)'],
    globalSetup: './hooks/jest-global-setup.ts',
    reporters: [
        '@mate-academy/jest-mochawesome-reporter'
    ]
};

export default config;
