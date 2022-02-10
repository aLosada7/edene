import { Container, ContainerProps } from './Container';
import { asPlayground, asChromaticStory } from '../../../../lib/story-intents';
import type { Story } from '../../../../lib/storybook-emotion-10-fixes';
import { Col } from './Col';
import { Row } from './Row';

export default {
    title: 'Components/Layout/Grid/Container',
    component: Container,
};

const grid = (
    <Row>
        <Col sm={12} lg={6}>
            <p>Span 25% desktop</p>
            <p>Span 50% mobile</p>
        </Col>
        <Col sm={12} lg={6}>
            <p>Span 25% desktop</p>
            <p>Span 50% mobile</p>
        </Col>
        <Col sm={12} lg={6}>
            <p>Span 25% desktop</p>
            <p>Span 50% mobile</p>
        </Col>
        <Col sm={12} lg={6}>
            <p>Span 25% desktop</p>
            <p>Span 50% mobile</p>
        </Col>
    </Row>
);

const Template: Story<ContainerProps> = (args: ContainerProps) => (
    <Container {...args}>{grid}</Container>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************
