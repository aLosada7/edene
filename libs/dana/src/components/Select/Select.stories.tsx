import { Select, Option } from '.';
import { asPlayground } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Forms/Select',
    component: Select,
};

const Template: Story = () => (
    <Select label="Select">
        <Option value="1">
            <span>1</span>
        </Option>
        <Option value="12">
            <span>12</span>
        </Option>
        <Option value="123">
            <span>123</span>
        </Option>
    </Select>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);
