import { Col, Form, Row, TextInput } from '@edene/components';

const TwoColumnSameRow = () => (
    <Form>
        <Row py={4}>
            <Col md={12}>
                <TextInput label="Name" />
            </Col>
            <Col md={12}>
                <TextInput label="Email" required />
            </Col>
        </Row>
    </Form>
);

export default TwoColumnSameRow;
