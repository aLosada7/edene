import { addDecorator } from '@storybook/react';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import { ThemeDecorator } from '@edene/foundations';
import './styles.scss';

export const parameters = {
    layout: 'centered',
    viewport,
    backgrounds,
};

addDecorator(ThemeDecorator);
