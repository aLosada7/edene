module.exports = {
    displayName: 'dana',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/libs/dana',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
