/* eslint-disable */
export default {
    displayName: 'components',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/libs/components',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
