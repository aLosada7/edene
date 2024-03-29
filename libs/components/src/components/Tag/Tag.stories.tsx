import { COMPONENT_COLORS, ICON_VARIANTS } from '@edene/foundations';
import { Story } from '@storybook/react';

import { Row } from '../../layout/Grid';
import { Tag, TagProps } from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        type: {
            options: ['brand', ...COMPONENT_COLORS],
            control: { type: 'radio' },
        },
        iconVariant: {
            options: ICON_VARIANTS,
            control: { type: 'radio' },
        },
    },
};

export const Playground: Story<TagProps & { text: string }> = ({
    text,
    ...args
}) => <Tag {...args}>{text}</Tag>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    type: 'brand',
    icon: 'grade',
    iconVariant: 'filled',
    text: 'Playground',
};

export const Default: Story<TagProps> = () => <Tag type="brand">Default</Tag>;

export const Types = () => (
    <Row gap={4}>
        <Tag type="brand">Brand</Tag>
        <Tag type="success">Success</Tag>
        <Tag type="info">Info</Tag>
        <Tag type="danger">Danger</Tag>
        <Tag type="gray">Gray</Tag>
    </Row>
);

export const WithIcon: Story<TagProps> = () => (
    <Tag type="brand" icon="label" iconVariant="outlined">
        With Icon
    </Tag>
);
