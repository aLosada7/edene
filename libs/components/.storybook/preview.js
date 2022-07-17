import { addDecorator } from '@storybook/react';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import ThemeDecorator from '@dana-theme';
import './styles.scss';

export const parameters = {
    viewport,
    backgrounds,
};

addDecorator(ThemeDecorator);
