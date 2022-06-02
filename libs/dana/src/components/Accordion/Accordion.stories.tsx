import { Accordion, AccordionProps } from './index';
import { Story } from '@storybook/react';
import { AccordionRow } from './AccordionRow';
import { asChromaticStory, asPlayground } from '../../lib/story-intents';
import { Container } from '..';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    decorators: [
        (Story: any) => (
            <Container mt={8}>
                <Story />
            </Container>
        ),
    ],
};

const Template: Story<AccordionProps> = (args: AccordionProps) => (
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

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

export const WithoutCTALabels = Template.bind({});
WithoutCTALabels.args = {
    hideToggleLabel: true,
};
asChromaticStory(WithoutCTALabels);

// *****************************************************************************

export const Bordered = Template.bind({});
Bordered.args = {
    variant: 'bordered',
};
asChromaticStory(Bordered);
