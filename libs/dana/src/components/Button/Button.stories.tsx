import { ArrowRightIcon, CautionIcon } from '../../foundations/icons';
import { Meta } from '@storybook/react';
import React, { useRef } from 'react';
import { Container, Row } from '..';
import { Button, ButtonProps } from './Button';
import ButtonGroup from './ButtonGroup';
import { StoryHStack } from '../../lib/general-story-components';
import { Link } from 'react-router-dom';

export default {
    component: Button,
    title: 'Components/Forms/Button',
    decorators: [
        (Story: any) => (
            <Container mt={8}>
                <Story />
            </Container>
        ),
    ],
} as Meta;

export const filled = () => <Button>Button</Button>;

export const outlines = () => <Button variant="outline">Button</Button>;

export const links = () => <Button variant="link">Button</Button>;

export const variants = () => (
    <StoryHStack>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="link">Button</Button>
    </StoryHStack>
);

export const sizes = () => (
    <StoryHStack>
        <Button size="xsmall">Button</Button>
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
    </StoryHStack>
);

export const withIcon = () => (
    <>
        <StoryHStack>
            <Button leftIcon="home">Home</Button>
            <Button rightIcon="arrow_forward">Call us</Button>
        </StoryHStack>
        <StoryHStack>
            <Button leftIcon="home" variant="outline">
                Home
            </Button>
            <Button rightIcon="arrow_forward" variant="outline">
                Call us
            </Button>
        </StoryHStack>
        <StoryHStack>
            <Button leftIcon="home" variant="link">
                Home
            </Button>
            <Button rightIcon="arrow_forward" variant="link">
                Call us
            </Button>
        </StoryHStack>
    </>
);

export const disabled = () => (
    <StoryHStack>
        <Button disabled>Button</Button>
        <Button variant="outline" disabled>
            Button
        </Button>
    </StoryHStack>
);

export const withIconOnly = () => (
    <StoryHStack>
        <Button>
            <ArrowRightIcon />
        </Button>
        <Button variant="outline">
            <ArrowRightIcon />
        </Button>
    </StoryHStack>
);

export const buttonGroup = () => (
    <ButtonGroup variant="outline">
        <Button color="success">Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
);

export const WithRef = () => {
    const ref = useRef<HTMLButtonElement>(null);
    return <Button ref={ref}>Ref</Button>;
};

export const AsPolymorphic = () => (
    <ButtonGroup variant="outline">
        <Button component="a" href="#">
            Link
        </Button>
        {/* <Button component={Link} to="/hello">
            hello
        </Button> */}
    </ButtonGroup>
);
