module.exports = {
  displayName: 'job-auth',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  watchman: false,
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/job-auth'
};
