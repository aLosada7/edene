import { useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './index';
import { Icon } from '../../icons';
import ButtonGroup from './ButtonGroup';
import { Box } from '../../layout/Box';
import { Row } from '../../layout/Grid';

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

export const Default = () => <Button>Default</Button>;

export const Variants = () => (
    <Row direction="column" gap={4}>
        <Button>Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
    </Row>
);

export const Sizes = () => (
    <Row direction="column" align="center-center" gap={4}>
        <Row direction="column" gap={4}>
            <Button size="xsmall">Xsmall</Button>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </Row>
        <Box width="400px">
            <Button size="block">Block</Button>
        </Box>
    </Row>
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

export const PolymorphicComponent = () => (
    <Button as="a" href="#" variant="outlined">
        Link
    </Button>
);
