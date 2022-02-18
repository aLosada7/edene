import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';
import { BreadcrumbItem } from './BreadcrumbItem';

export default {
    title: 'Components/Navigation/Breadcrumb',
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem },
};

const Template: Story<BreadcrumbProps> = (args: BreadcrumbProps) => (
    <Breadcrumb {...args}>
        <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="/#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
    text: 'Email',
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultBreadcrumb = Template.bind({});
asChromaticStory(DefaultBreadcrumb);
