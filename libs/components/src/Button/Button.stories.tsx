import { Meta } from '@storybook/react';
import { useRef } from 'react';

import { LinkedinIcon } from '@edene/foundations';

import { Button, ButtonProps } from './Button';
import ButtonGroup from './ButtonGroup';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { StoryHStack } from '../lib/general-story-components';
import { asPlayground, asChromaticStory } from '../lib/story-intents';

export default {
    component: Button,
    title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps<'button'>> = (
    args: ButtonProps<'button'>
) => <Button {...args} />;

export const Playground = Template.bind({});
asPlayground(Playground);

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
            <LinkedinIcon />
        </Button>
        <Button variant="outline">
            <LinkedinIcon />
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
