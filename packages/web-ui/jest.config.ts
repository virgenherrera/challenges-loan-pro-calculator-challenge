/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html

*/
import type { Config } from 'jest';

export const BaseConfig: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.(ts|tsx)',
    '!**/*.d.ts',
    '!**/(index|main).(ts|tsx)',
    '!**/*.(bootstrap|dto|enum|interface|mock|module).(ts|tsx)',
    '!**/__mocks__.ts',
  ],
  coverageDirectory: '../coverage/unit',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'html-spa'],
  coverageThreshold: {
    global: { branches: 85, functions: 85, lines: 85, statements: 85 },
  },
  maxWorkers: '50%',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  reporters: ['default', 'summary', 'github-actions'],
  rootDir: 'src',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  testRegex: '.spec.tsx?$',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  verbose: false,
};

export default BaseConfig;
