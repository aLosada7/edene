import { Row, RowProps } from './Row';
import { asChromaticStory } from '../../../../lib/story-intents';
import type { Story } from '../../../../lib/storybook-emotion-10-fixes';
import { Col } from './Col';

export default {
    title: 'Components/Layout/Grid/Row',
    component: Row,
};

const Template: Story<RowProps> = (args: RowProps) => (
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

// *****************************************************************************

export const WithoutContainer = Template.bind({});
asChromaticStory(WithoutContainer);

// *****************************************************************************
