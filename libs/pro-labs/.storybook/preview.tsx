import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '@edene/foundations';

import { viewport } from './preview/viewport';
import './preview/styles.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    viewport,
};

addDecorator(ThemeDecorator);
