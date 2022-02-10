import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Text,
    Form,
    TextInput,
    Textarea,
    Button,
    whiteColor,
} from '@dana';
import { contactCard } from './styles';

export function ContactForm() {
    return (
        <Container>
            <Card cssOverrides={contactCard}>
                <CardBody>
                    <Row>
                        <Col sm={24} lg={8}>
                            Column 1
                        </Col>
                        <Col sm={24} lg={16} direction="column" align="center">
                            <Row>
                                <Col sm={24} lg={24} direction="column">
                                    <Text size="h3" mt={4}>
                                        Let's talk
                                    </Text>
                                    <Text size="h3">
                                        Give me some information.
                                    </Text>
                                </Col>
                            </Row>
                            <Form>
                                <Container noPadding>
                                    <Row>
                                        <Col sm={24} lg={12}>
                                            <TextInput
                                                label="Name"
                                                cssLabelOverrides={whiteColor}
                                            />
                                        </Col>
                                        <Col sm={24} lg={12}>
                                            <TextInput
                                                label="Email"
                                                cssLabelOverrides={whiteColor}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={24} lg={24}>
                                            <Textarea
                                                label="Comments"
                                                cssLabelOverrides={whiteColor}
                                            ></Textarea>
                                        </Col>
                                    </Row>
                                    {/* Form Actions */}
                                    <Row>
                                        <Col sm={24} lg={24}>
                                            <Button>Button</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default ContactForm;
