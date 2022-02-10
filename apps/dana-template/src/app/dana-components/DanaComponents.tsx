import { Col, Container, Row, Card, CardImage, CardBody, Text } from '@dana';

export const DanaComponents = () => {
    return (
        <>
            <h1>Dana Components</h1>
            <p>
                Dana Template uses Dana as its primary user interface library.
                It offers from controls, icons and many more components.
            </p>

            <h2>Component examples and API documentation</h2>
            <p>
                Following, you can find links to the official documentation.
                Click on the component you want to learn more about and it will
                redirect you to the related section of the official
                documentation.
            </p>

            <Container>
                <Row>
                    <Col sm={24} md={12} lg={8} xl={6}>
                        <Card href="http://localhost:4400/?path=/docs/dana-accordion--playground">
                            <CardImage
                                src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
                                alt="Image Example"
                            ></CardImage>
                            <CardBody>
                                <Text weight="medium" size="lg">
                                    Accordion
                                </Text>
                                <Text mt={4} color="secondary">
                                    Allows to obtain more information about
                                    different options.
                                </Text>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={24} md={12} lg={8} xl={6}>
                        <Card href="http://localhost:4400/?path=/docs/dana-accordion--playground">
                            <CardImage
                                src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
                                alt="Image Example"
                            ></CardImage>
                            <CardBody>
                                <Text weight="medium" size="lg">
                                    Accordion
                                </Text>
                                <Text mt={4} color="secondary">
                                    Allows to obtain more information about
                                    different options.
                                </Text>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={24} md={12} lg={8} xl={6}>
                        <Card href="http://localhost:4400/?path=/docs/dana-accordion--playground">
                            <CardImage
                                src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
                                alt="Image Example"
                            ></CardImage>
                            <CardBody>
                                <Text weight="medium" size="lg">
                                    Accordion
                                </Text>
                                <Text mt={4} color="secondary">
                                    Allows to obtain more information about
                                    different options.
                                </Text>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
