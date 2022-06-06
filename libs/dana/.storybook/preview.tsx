import { addDecorator } from '@storybook/react';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import themeProvider from '../src/foundations/theme/themeDecorator';
import './styles.scss';

export const parameters = {
    viewport,
    backgrounds,
};

addDecorator(themeProvider);
