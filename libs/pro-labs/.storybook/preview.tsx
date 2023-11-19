import { ThemeDecorator } from '@edene/foundations';
import { addDecorator } from '@storybook/react';

import './preview/styles.scss';
import { viewport } from './preview/viewport';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    viewport,
};

addDecorator(ThemeDecorator);
