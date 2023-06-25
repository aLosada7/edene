import {
    Container,
    Row,
    Col,
    Card,
    CardSection,
    Heading,
    Form,
    TextInput,
    Textarea,
    Button,
} from '@edene/components';

import { contactCard } from './styles';

export const ContactForm = () => {
    return (
        <Container>
            <Card css={contactCard}>
                <CardSection>
                    <Row>
                        <Col sm={24} lg={8}>
                            <Heading size="h3" mt={4}>
                                Column 1
                            </Heading>
                        </Col>
                        <Col sm={24} lg={16} direction="column" align="center">
                            <Row>
                                <Col sm={24} lg={24} direction="column">
                                    <Heading size="h3" mt={4}>
                                        Let's talk
                                    </Heading>
                                    <Heading size="h3">
                                        Give me some information.
                                    </Heading>
                                </Col>
                            </Row>
                            <Form>
                                <Container pv={0} mt={4}>
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
