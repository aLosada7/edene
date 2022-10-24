import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Title } from './index';

export default {
    title: 'Components/Title',
    component: Title,
} as Meta;

const DEFAULT_TITLE = 'Default Title';
const CLASSIC_TITLE = 'Modern bookkeeping for digital businesses';
const PLAYFUL_TITLE = 'Heroicons UI';
const NEUTRAL_TITLE = "A Workspace for World's Biggest Companies";

const Template: Story = ({ text, ...args }) => <Title {...args}>{text}</Title>;

export const Default = Template.bind({});
Default.args = {
    text: DEFAULT_TITLE,
};

export const Classic = Template.bind({});
Classic.args = {
    text: CLASSIC_TITLE,
    cssOverrides: css`
        font-family: freight text;
    `,
};

export const Playful = Template.bind({});
Playful.args = {
    text: PLAYFUL_TITLE,
    cssOverrides: css`
        font-family: proxima soft;
    `,
};

export const Neutral = Template.bind({});
Neutral.args = {
    text: NEUTRAL_TITLE,
    cssOverrides: css`
        font-family: freight sans;
    `,
};
