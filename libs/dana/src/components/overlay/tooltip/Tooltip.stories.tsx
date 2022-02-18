import useHover from '../../../hooks/useHover';
import { Container, Text } from '../..';
import { asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';
import { useRef } from 'react';
import { Tooltip } from './Tooltip';

export default {
    title: 'Components/Overlay/Tooltip',
    component: Tooltip,
};

const Template: Story = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [hoverRef, hovering] = useHover(ref);

    return (
        <Container mt={10}>
            <div ref={hoverRef}>
                <Text>Hover me!</Text>
                {hovering && <Tooltip />}
            </div>
        </Container>
    );
};

export const Default = Template.bind({});
asChromaticStory(Default);
