/* eslint-disable */
export default {
    displayName: 'components',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    coverageDirectory: '../../coverage/libs/components',
};
