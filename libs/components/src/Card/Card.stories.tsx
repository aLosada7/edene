import { Meta } from '@storybook/react';
import { css } from '@emotion/react';

import { Icon } from '@edene/components';

import { asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { Card, CardActions, CardBody, CardImage, CardProps } from '.';
import { Badge, Row, Col, Text, Button, Divider } from '..';

const cardStatus = css`
    position: inherit;
`;

const cardDescription = css`
    color: rgb(100, 116, 139);
`;

export default {
    component: Card,
    title: 'Components/Card',
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
                        <Badge text="Web" cssOverrides={cardStatus}></Badge>
                        <Icon size="xsmall" color="rgb(22, 163, 74)">
                            done
                        </Icon>
                    </Row>

                    <Text mt={16} size="lg">
                        Basics of Angular
                    </Text>
                    <Text mt={2} cssOverrides={cardDescription}>
                        Introductory course for Angular and framework basics
                    </Text>

                    <Divider width={12} />

                    <Row direction="column">
                        <Text icon={<Icon size="small">notifications</Icon>}>
                            <span>30 minutes</span>
                        </Text>
                        <Text icon={<Icon size="small">school</Icon>}>
                            <span>Completed twice</span>
                        </Text>
                    </Row>
                </CardBody>
                <CardActions>
                    <Divider />
                    <Row align="end-center" px={6} py={4}>
                        <Button variant="outline" rightIcon="arrow_right_alt">
                            Continue
                        </Button>
                    </Row>
                </CardActions>
            </Card>
        </Col>
    </Row>
);
asChromaticStory(BodyAndActions);
