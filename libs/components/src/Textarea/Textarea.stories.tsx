import { useState } from 'react';
import { Textarea, TextareaProps } from '.';
import { asChromaticStory, asPlayground } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Textarea',
    component: Textarea,
};

const Template: Story = () => <Textarea label="Select"></Textarea>;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

export const ControlledTemplate: Story<TextareaProps> = (
    args: TextareaProps
) => {
    const [state, setState] = useState('');
    return (
        <Textarea
            {...args}
            value={state}
            onChange={(event) => setState(event.target.value)}
        />
    );
};
