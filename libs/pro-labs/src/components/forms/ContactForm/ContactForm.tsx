import {
    Button,
    Card,
    CardSection,
    Col,
    Container,
    Form,
    Heading,
    Row,
    Textarea,
    TextInput,
} from '@edene/components';

import { contactCard } from './styles';

export const ContactForm = () => {
    return (
        <Container>
            <Card css={contactCard}>
                <CardSection>
                    <Row>
                        <Col sm={24} lg={8}>
                            <Heading type="h1">Column 1</Heading>
                        </Col>
                        <Col sm={24} lg={16} direction="column" align="center">
                            <Row>
                                <Col sm={24} lg={24} direction="column">
                                    <Heading type="h3">Let's talk</Heading>
                                    <Heading type="h3">
                                        Give me some information.
                                    </Heading>
                                </Col>
                            </Row>
                            <Form>
                                <Container>
                                    <Row>
                                        <Col md={12}>
                                            <TextInput label="Name" />
                                        </Col>
                                        <Col md={12}>
                                            <TextInput label="Email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Textarea label="Comments"></Textarea>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={24} lg={24}>
                                            <Button>Button</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Col>
                    </Row>
                </CardSection>
            </Card>
        </Container>
    );
};
