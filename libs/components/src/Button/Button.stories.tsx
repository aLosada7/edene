import { useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './index';
import { Icon } from '../icons';
import ButtonGroup from './ButtonGroup';
import { Stack } from '../Stack';

export default {
    component: Button,
    title: 'Components/Button',
} as Meta;

export const Playground: Story<ButtonProps & { text: string }> = ({
    text,
    ...args
}) => <Button {...args}>{text}</Button>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    text: 'Button',
};

export const Filled = () => <Button>Default Button</Button>;

export const Variants = () => (
    <Stack>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="link">Button</Button>
    </Stack>
);

export const Sizes = () => (
    <Stack>
        <Button size="xsmall">Button</Button>
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
    </Stack>
);

export const WithIconLeft = () => <Button iconLeft="home">Home</Button>;

export const WithIconRight = () => (
    <Button iconRight="arrow_forward">Call us</Button>
);

export const WithDisabled = () => <Button disabled>Button</Button>;

export const WithIconOnly = () => (
    <Button>
        <Icon>home</Icon>
    </Button>
);

export const WithGroup = () => (
    <ButtonGroup variant="outline">
        <Button color="success">Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
);

export const WithRef = () => {
    const ref = useRef<HTMLButtonElement>(null);
    return <Button ref={ref}>Ref</Button>;
};

export const AsAnchor = () => (
    <Button component="a" href="#">
        Link
    </Button>
);
