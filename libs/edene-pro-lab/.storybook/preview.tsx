import { addDecorator } from '@storybook/react';

import { ThemeDecorator } from '@edene/foundations';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import './styles.scss';

export const parameters = {
    viewport,
    backgrounds,
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
};

addDecorator(ThemeDecorator);
