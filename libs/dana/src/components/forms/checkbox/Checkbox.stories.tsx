import { Checkbox, CheckboxProps } from '.';
import { asPlayground } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Forms/Checkbox',
    component: Checkbox,
};

const Template: Story<CheckboxProps> = (props: CheckboxProps) => (
    <Checkbox>I accept terms and conditions</Checkbox>
);

export const Playground = Template.bind({});
asPlayground(Playground);
