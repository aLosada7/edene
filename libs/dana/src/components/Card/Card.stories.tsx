import { Story, Meta } from '@storybook/react';
import { asChromaticStory } from '../../lib/story-intents';
import { Card, CardActions, CardBody, CardImage, CardProps } from '.';
import { Badge, Row, Col, Text, Button, Divider } from '..';
import {
    ArrowRightIcon,
    BellIcon,
    GraduationIcon,
    ValidIcon,
} from '../../foundations/icons';
import { cardDescription, cardStatus } from './storiesStyles';

export default {
    component: Card,
    title: 'Components/Data Display/Card',
} as Meta;

export const ImageAndBody: Story<CardProps> = () => (
    <Row>
        <Col sm={24} md={12} lg={8} xl={6}>
            <Card>
                <CardImage
                    src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
                    alt="Image Example"
                ></CardImage>
                <CardBody>
                    <Text color="hsl(212, 56%, 16%)" size="lg">
                        Basics of Angular
                    </Text>
                    <Text color="hsl(212, 18%, 35%)" mt={4}>
                        Introductory course for Angular and framework basics
                    </Text>
                </CardBody>
            </Card>
        </Col>
    </Row>
);
asChromaticStory(ImageAndBody);

export const BodyAndActions: Story<CardProps> = (args) => (
    <Row>
        <Col lg={6} sm={24}>
            <Card>
                <CardBody>
                    <Row align="space-between-center">
                        <Badge
                            text="Web"
                            variant="success"
                            cssOverrides={cardStatus}
                        ></Badge>
                        <ValidIcon size="xsmall" color="rgb(22, 163, 74)" />
                    </Row>

                    <Text mt={16} size="lg">
                        Basics of Angular
                    </Text>
                    <Text mt={2} cssOverrides={cardDescription}>
                        Introductory course for Angular and framework basics
                    </Text>

                    <Divider width={12} />

                    <Row direction="column">
                        <Text icon={<BellIcon size="small" />}>
                            <span>30 minutes</span>
                        </Text>
                        <Text icon={<GraduationIcon size="small" />}>
                            <span>Completed twice</span>
                        </Text>
                    </Row>
                </CardBody>
                <CardActions>
                    <Divider />
                    <Row align="end-center" px={6} py={4}>
                        <Button
                            variant="outline"
                            rightIcon={<ArrowRightIcon />}
                        >
                            Continue
                        </Button>
                    </Row>
                </CardActions>
            </Card>
        </Col>
    </Row>
);
asChromaticStory(BodyAndActions);
