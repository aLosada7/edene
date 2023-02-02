import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '@edene/foundations';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import './preview/styles.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds,
    layout: 'centered',
    viewport,
};

addDecorator(ThemeDecorator);
