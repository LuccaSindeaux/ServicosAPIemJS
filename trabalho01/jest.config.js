module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/config/'
  ],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  testMatch: ['**/__tests__/**/*.test.js']
};