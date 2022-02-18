import React from 'react';
import { Text } from '..';
import { asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';
import { FadeIn } from './FadeIn';

export default {
    title: 'Animations/FadeIn',
    component: FadeIn,
};

export const Default: Story = () => {
    return (
        <>
            <Text size="h3">FadeIn Transition</Text>
            <FadeIn delay="1s">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus id rutrum orci. Sed pulvinar aliquet nulla, sed
                    lacinia dui egestas id. Donec lorem justo, dictum at
                    malesuada a, condimentum ac libero. Aenean sollicitudin
                    dictum velit, eu congue urna malesuada eget. Maecenas tempor
                    tempor massa id rutrum. Nam nec quam blandit, blandit arcu
                    ac, lacinia tortor. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Integer
                    blandit mollis auctor. Nullam in massa quis felis fermentum
                    iaculis non a risus. Vivamus a lorem nec tortor posuere
                    egestas. Proin varius imperdiet nibh vestibulum efficitur.
                    Duis ac urna eu leo vehicula rhoncus id id odio.
                </p>
            </FadeIn>
        </>
    );
};
Default.storyName = 'FadeIn';
asChromaticStory(Default);
