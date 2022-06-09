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

export const filled = () => (
    <StoryHStack>
        <Button>Button</Button>
        <Button color="secondary">Button</Button>
        <Button color="accent">Button</Button>
        <Button color="success">Button</Button>
        <Button color="danger">Button</Button>
        <Button color="dark">Button</Button>
    </StoryHStack>
);

export const outlines = () => (
    <StoryHStack>
        <Button variant="outline">Button</Button>
        <Button variant="outline" color="secondary">
            Button
        </Button>
        <Button variant="outline" color="accent">
            Button
        </Button>
        <Button variant="outline" color="success">
            Button
        </Button>
        <Button variant="outline" color="danger">
            Button
        </Button>
        <Button variant="outline" color="dark">
            Button
        </Button>
    </StoryHStack>
);

export const links = () => (
    <StoryHStack>
        <Button variant="link">Button</Button>
        <Button variant="link" color="secondary">
            Button
        </Button>
        <Button variant="link" color="accent">
            Button
        </Button>
        <Button variant="link" color="success">
            Button
        </Button>
        <Button variant="link" color="danger">
            Button
        </Button>
        <Button variant="link" color="dark">
            Button
        </Button>
    </StoryHStack>
);

export const withVariants = () => (
    <StoryHStack>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
    </StoryHStack>
);

export const withSizes = () => (
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
            <Button leftIcon={<CautionIcon />}>Caution</Button>
            <Button rightIcon={<ArrowRightIcon />} variant="outline">
                Call us
            </Button>
        </StoryHStack>
        <StoryHStack>
            <Button leftIcon={<CautionIcon />}>Caution</Button>
            <Button rightIcon={<ArrowRightIcon />} variant="outline">
                Call us
            </Button>
        </StoryHStack>
        <StoryHStack>
            <Button leftIcon={<CautionIcon />}>Caution</Button>
            <Button rightIcon={<ArrowRightIcon />} variant="outline">
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
        <Button color="accent">Cancel</Button>
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
