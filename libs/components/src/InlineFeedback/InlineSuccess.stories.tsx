import { Story } from '@storybook/react';

import { InlineSuccess } from './index';
import type { InlineFeedbackProps } from './types';

export default {
    title: 'Forms/InlineSuccess',
    component: InlineSuccess,
};

export const Playground: Story<InlineFeedbackProps & { text: string }> = ({
    text,
    ...args
}) => <InlineSuccess {...args}>{text}</InlineSuccess>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    text: 'Looks great!',
};

export const Default: Story<InlineFeedbackProps> = () => (
    <InlineSuccess>Looks great!</InlineSuccess>
);
