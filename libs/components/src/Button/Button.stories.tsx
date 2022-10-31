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

export const Filled = () => <Button>Default</Button>;

export const Variants = () => (
    <Stack>
        <Button>Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="link">Link</Button>
    </Stack>
);

export const Sizes = () => (
    <Stack>
        <Button size="xsmall">Xsmall</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="block">Block</Button>
    </Stack>
);

export const WithIconLeft = () => (
    <Button icon="home" iconSide="left">
        Home
    </Button>
);

export const WithIconRight = () => (
    <Button icon="arrow_forward" iconSide="right">
        Call us
    </Button>
);

export const WithLoading = () => <Button loading>With Loading</Button>;

export const WithDisabled = () => <Button disabled>Button</Button>;

export const WithIconOnly = () => (
    <Button>
        <Icon>home</Icon>
    </Button>
);

export const WithGroup = () => (
    <ButtonGroup variant="outlined">
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
