import { Col, Row } from '@dana';

interface StoryHStackProps {
    children: React.ReactElement[];
}

export const StoryHStack = ({ children }: StoryHStackProps) => (
    <Row>
        <Col sm={24} md={16} lg={16} horizontalStack={2}>
            {children}
        </Col>
    </Row>
);
