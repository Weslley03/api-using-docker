/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: [
  "**/__tests__/**/*.[jt]s?(x)",
  "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

module.exports = config;
