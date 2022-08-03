/* eslint-disable */
export default {
    displayName: 'edene-pro-lab',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/libs/edene-pro-lab',
};
