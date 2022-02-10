import { SvgArrowRight, SvgCaution } from '../../../foundations/icons';
import { Meta } from '@storybook/react';
import React from 'react';
import { Container, Row } from '../..';
import { Button, ButtonProps } from './Button';
import ButtonGroup from './ButtonGroup';
import { StoryHStack } from '../../../../lib/general-story-components';

export default {
    component: Button,
    title: 'Components/Forms/Button',
    decorators: [
        (Story: any) => (
            <Container mt={10}>
                <Story />
            </Container>
        ),
    ],
} as Meta;

export const basic = () => (
    <StoryHStack>
        <Button>Button</Button>
        <Button color="default">Button</Button>
        <Button color="pink">Button</Button>
    </StoryHStack>
);

export const outlines = () => (
    <StoryHStack>
        <Button variant="outline">Button</Button>
        <Button variant="outline" color="default">
            Button
        </Button>
        <Button variant="outline" color="pink">
            Button
        </Button>
    </StoryHStack>
);

export const withVariants = () => (
    <StoryHStack>
        <Button variant="basic" color="teal">
            Button
        </Button>
        <Button variant="outline" color="teal">
            Button
        </Button>
    </StoryHStack>
);

export const withSizes = () => (
    <StoryHStack>
        <Button color="teal" size="xsmall">
            Button
        </Button>
        <Button color="teal" size="small">
            Button
        </Button>
        <Button color="teal" size="medium">
            Button
        </Button>
        <Button color="teal" size="large">
            Button
        </Button>
    </StoryHStack>
);

export const withIcon = () => (
    <>
        <StoryHStack>
            <Button leftIcon={<SvgCaution />}>Caution</Button>
            <Button rightIcon={<SvgArrowRight />} variant="outline">
                Call us
            </Button>
        </StoryHStack>
        <StoryHStack>
            <Button leftIcon={<SvgCaution />} color="default">
                Caution
            </Button>
            <Button
                rightIcon={<SvgArrowRight />}
                color="default"
                variant="outline"
            >
                Call us
            </Button>
        </StoryHStack>
        <StoryHStack>
            <Button leftIcon={<SvgCaution />} color="teal">
                Caution
            </Button>
            <Button
                rightIcon={<SvgArrowRight />}
                color="teal"
                variant="outline"
            >
                Call us
            </Button>
        </StoryHStack>
    </>
);

export const withDisabled = () => (
    <Row align="space-between-center">
        <Button variant="basic" color="teal" disabled>
            Button
        </Button>
        <Button variant="outline" color="teal" disabled>
            Button
        </Button>
    </Row>
);

export const iconButton = () => (
    <Button color="teal" size="xsmall">
        <SvgArrowRight size="xsmall" />
    </Button>
);

export const withButtonGroup = () => (
    <ButtonGroup variant="outline">
        <Button color="teal">Save</Button>
        <Button color="gray">Cancel</Button>
    </ButtonGroup>
);
