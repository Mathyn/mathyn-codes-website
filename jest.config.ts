import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./setup-jest.ts'],
  testPathIgnorePatterns: ['e2e']
};

export default jestConfig;