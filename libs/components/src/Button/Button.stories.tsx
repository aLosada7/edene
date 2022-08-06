import { Meta } from '@storybook/react';
import { Fragment, useRef } from 'react';

import { Icon } from '../icons';
import { Button } from './Button';
import ButtonGroup from './ButtonGroup';
import { StoryHStack } from '../lib/general-story-components';
import { asChromaticStory } from '../lib/story-intents';

export default {
    component: Button,
    title: 'Components/Button',
} as Meta;

export const Filled = () => <Button>Button</Button>;
asChromaticStory(Filled);

export const Outline = () => <Button variant="outline">Button</Button>;
asChromaticStory(Outline);

export const Link = () => <Button variant="link">Button</Button>;
asChromaticStory(Link);

export const Variants = () => (
    <StoryHStack>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="link">Button</Button>
    </StoryHStack>
);
asChromaticStory(Variants);

export const Sizes = () => (
    <StoryHStack>
        <Button size="xsmall">Button</Button>
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
    </StoryHStack>
);
asChromaticStory(Sizes);

export const WithIcon = () => (
    <Fragment>
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
    </Fragment>
);
asChromaticStory(WithIcon);

export const Disabled = () => (
    <StoryHStack>
        <Button disabled>Button</Button>
        <Button variant="outline" disabled>
            Button
        </Button>
    </StoryHStack>
);
asChromaticStory(Disabled);

export const WithIconOnly = () => (
    <StoryHStack>
        <Button>
            <Icon>home</Icon>
        </Button>
        <Button variant="outline">
            <Icon>home</Icon>
        </Button>
    </StoryHStack>
);
asChromaticStory(WithIconOnly);

export const Group = () => (
    <ButtonGroup variant="outline">
        <Button color="success">Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
);
asChromaticStory(ButtonGroup);

export const WithRef = () => {
    const ref = useRef<HTMLButtonElement>(null);
    return <Button ref={ref}>Ref</Button>;
};
asChromaticStory(WithRef);

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
asChromaticStory(AsPolymorphic);
