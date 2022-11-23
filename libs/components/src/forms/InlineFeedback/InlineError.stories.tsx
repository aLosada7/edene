import { Story } from '@storybook/react';

import { InlineError } from './index';
import type { InlineFeedbackProps } from './types';

export default {
    title: 'Forms/InlineError',
    component: InlineError,
};

export const Playground: Story<InlineFeedbackProps & { text: string }> = ({
    text,
    ...args
}) => <InlineError {...args}>{text}</InlineError>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    text: 'Mail already registered',
};

export const Default: Story<InlineFeedbackProps> = () => (
    <InlineError>Mail already registered</InlineError>
);
