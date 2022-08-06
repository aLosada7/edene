import { useState } from 'react';

import { Select, SelectProps, Option } from '.';
import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Select',
    component: Select,
    args: {
        label: 'Favorite framework',
    },
};

const Template: Story<SelectProps> = (args: SelectProps) => (
    <Select {...args}>
        <Option value="React">
            <span>React</span>
        </Option>
        <Option value="Angular">
            <span>Angular</span>
        </Option>
        <Option value="Vue">
            <span>Vue</span>
        </Option>
    </Select>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

export const Default = Template.bind({});
asChromaticStory(Default);

// export const Controlled: Story<SelectProps> = (args: SelectProps) => {
//     const [value] = useState('React');
//     return (
//         <Select {...args} value={value}>
//             <Option value="React">
//                 <span>React</span>
//             </Option>
//             <Option value="Angular">
//                 <span>Angular</span>
//             </Option>
//             <Option value="Vue">
//                 <span>Vue</span>
//             </Option>
//         </Select>
//     );
// };
// asChromaticStory(Controlled);
