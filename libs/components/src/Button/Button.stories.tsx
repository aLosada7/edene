import { Meta } from '@storybook/react';
import { useRef } from 'react';

import { Icon } from '../icons';
import { Button } from './Button';
import ButtonGroup from './ButtonGroup';
import { StoryHStack } from '../lib/general-story-components';
import { asChromaticStory } from '../lib/story-intents';
import { Stack } from '../Stack';
import { Group as GroupComponent } from '../Group';

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
    <Stack>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="link">Button</Button>
    </Stack>
);
asChromaticStory(Variants);

export const Sizes = () => (
    <Stack>
        <Button size="xsmall">Button</Button>
        <Button size="small">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="large">Button</Button>
    </Stack>
);
asChromaticStory(Sizes);

export const WithIcon = () => (
    <Stack>
        <GroupComponent>
            <Button iconLeft="home">Home</Button>
            <Button iconRight="arrow_forward">Call us</Button>
        </GroupComponent>
        <GroupComponent>
            <Button iconLeft="home" variant="outline">
                Home
            </Button>
            <Button iconRight="arrow_forward" variant="outline">
                Call us
            </Button>
        </GroupComponent>
        <GroupComponent>
            <Button iconLeft="home" variant="link">
                Home
            </Button>
            <Button iconRight="arrow_forward" variant="link">
                Call us
            </Button>
        </GroupComponent>
    </Stack>
);
asChromaticStory(WithIcon);

export const Disabled = () => (
    <Stack>
        <Button disabled>Button</Button>
        <Button variant="outline" disabled>
            Button
        </Button>
    </Stack>
);
asChromaticStory(Disabled);

export const WithIconOnly = () => (
    <Stack>
        <Button>
            <Icon>home</Icon>
        </Button>
        <Button variant="outline">
            <Icon>home</Icon>
        </Button>
    </Stack>
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
