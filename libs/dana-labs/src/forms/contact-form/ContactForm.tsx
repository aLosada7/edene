import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Text,
    Title,
    Form,
    TextInput,
    Textarea,
    Button,
} from '@dana';
import { contactCard } from './styles';

export const ContactForm = () => {
    return (
        <Container>
            <Card cssOverrides={contactCard}>
                <CardBody>
                    <Row>
                        <Col sm={24} lg={8}>
                            <Title size="h3" mt={4}>
                                Column 1
                            </Title>
                        </Col>
                        <Col sm={24} lg={16} direction="column" align="center">
                            <Row>
                                <Col sm={24} lg={24} direction="column">
                                    <Title size="h3" mt={4}>
                                        Let's talk
                                    </Title>
                                    <Title size="h3">
                                        Give me some information.
                                    </Title>
                                </Col>
                            </Row>
                            <Form>
                                <Container pv={0} mt={4}>
                                    <Row>
                                        <Col sm={24} lg={12}>
                                            <TextInput label="Name" />
                                        </Col>
                                        <Col sm={24} lg={12}>
                                            <TextInput label="Email" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={24} lg={24}>
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
                </CardBody>
            </Card>
        </Container>
    );
};
