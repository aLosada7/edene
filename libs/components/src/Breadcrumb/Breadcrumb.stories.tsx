import { Story } from '@storybook/react';

import { Breadcrumb, BreadcrumbProps, BreadcrumbItem } from './index';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem },
};

export const Playground: Story<
    BreadcrumbProps & { staticText: string; activeText: string }
> = ({ staticText, activeText, ...args }) => (
    <Breadcrumb {...args}>
        <BreadcrumbItem href="/#">{staticText}</BreadcrumbItem>
        <BreadcrumbItem active>{activeText}</BreadcrumbItem>
    </Breadcrumb>
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    staticText: 'Home',
    activeText: 'Services',
};

export const Default: Story<BreadcrumbProps> = () => (
    <Breadcrumb>
        <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="/#">Breadcrumb 2</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
);
