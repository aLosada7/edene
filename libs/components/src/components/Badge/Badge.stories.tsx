import { Fragment } from 'react';
import { Story } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';
import { Button } from '../Button';
import { Row } from '../../layout/Grid';

export default {
    title: 'Components/Badge',
    component: Badge,
};

export const Playground: Story<BadgeProps & { text: string }> = ({
    text,
    ...args
}) => <Badge {...args}>{text}</Badge>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    text: '5',
};

export const Default: Story<BadgeProps> = () => <Badge>1</Badge>;

export const BadgeInsideAButton = () => (
    <Button color="success">
        <Fragment>
            Badge Inside A Button <Badge>1</Badge>
        </Fragment>
    </Button>
);

export const WithColor = () => (
    <Row gap={4}>
        <Badge color="gray">1</Badge>
        <Badge color="teal">99+</Badge>
        <Badge color="pink">999+</Badge>
    </Row>
);
