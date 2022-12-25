import { transformUppercase } from '@edene/foundations';
import { Story } from '@storybook/react';

import { Accordion, AccordionProps, AccordionRow } from './index';

export default {
    title: 'Components/Accordion',
    component: Accordion,
};

export const Playground: Story<
    AccordionProps & {
        row1Label: string;
        row1Body: string;
        row2Label: string;
        row2Body: string;
    }
> = ({ row1Label, row1Body, row2Label, row2Body, ...args }) => (
    <div style={{ width: '50vw' }}>
        <Accordion {...args}>
            <AccordionRow label={row1Label}>{row1Body}</AccordionRow>
            <AccordionRow label={row2Label}>{row2Body}</AccordionRow>
        </Accordion>
    </div>
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    row1Label: 'Accordion Header 1',
    row1Body: 'Accordion body 1',
    row2Label: 'Accordion Header 2',
    row2Body: 'Accordion body 2',
};

export const Default: Story<AccordionProps> = (args: AccordionProps) => (
    <Accordion {...args}>
        <AccordionRow label="Collecting from multiple newsagents">
            Present your card to a newsagent each time you collect the paper.
            The newsagent will scan your card and will be reimbursed for each
            transaction automatically.
        </AccordionRow>
        <AccordionRow label="Delivery from your retailer">
            Simply give your preferred store / retailer the barcode printed on
            your subscription letter.
        </AccordionRow>
    </Accordion>
);

export const WithoutCTALabels = Default.bind({});
WithoutCTALabels.args = {
    hideToggleLabel: true,
};

export const Bordered = Default.bind({});
Bordered.args = {
    variant: 'bordered',
};
