const rootMain = require('../../../.storybook/main');
const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    ...rootMain,

    core: { ...rootMain.core, builder: 'webpack5' },

    stories: [...rootMain.stories, '../src/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
    webpackFinal: async (config, { configType }) => {
        // apply any global webpack configs that might have been specified in .storybook/main.js
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, { configType });
        }

        config.resolve.alias = {
            ...config.resolve.alias,
            '@emotion/core': toPath('node_modules/@emotion/react'),
            // You should add this row
            '@emotion/styled': toPath('node_modules/@emotion/styled'),
            'emotion-theming': toPath('node_modules/@emotion/react'),
        };

        return config;
    },
};
