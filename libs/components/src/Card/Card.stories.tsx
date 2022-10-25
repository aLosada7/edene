import { Meta, Story } from '@storybook/react';
import { css } from '@emotion/react';

import { grays } from '@edene/foundations';

import { Card, CardSection, CardMedia, CardProps } from '.';
import { Text } from '../Text';
import { ActionButton } from '../ActionButton';
import { Button } from '../Button';
import { Col, Row } from '../Grid';
import { Icon } from '../icons';
import { Avatar } from '../Avatar';
import avatarSrc from '../../assets/img/avatar.jpeg';
import house1Src from '../../assets/img/house1.jpg';
import house2Src from '../../assets/img/house2.jpg';

export default {
    component: Card,
    title: 'Components/Card',
    decorators: [
        (Story: Story) => (
            <div style={{ maxWidth: '450px' }}>
                <Story />
            </div>
        ),
    ],
} as Meta;

export const Default: Story<CardProps> = () => (
    <Card>
        <CardSection>Default card</CardSection>
    </Card>
);

export const WithImage: Story<CardProps> = () => (
    <Card>
        <CardMedia
            src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
            alt="Image Example"
        ></CardMedia>
        <CardSection>
            <Text color="hsl(212, 56%, 16%)" size="lg">
                Basics of Angular
            </Text>
            <Text color="hsl(212, 18%, 35%)" mb={2}>
                Introductory course for Angular and framework basics
            </Text>
            <Button variant="outline" size="block">
                Enroll
            </Button>
        </CardSection>
    </Card>
);

const actionButtonFav = css`
    position: absolute;
    top: 10px;
    right: 0;
`;

const transformUppercase = css`
    text-transform: uppercase;
`;

const agentSection = css`
    background-color: ${grays[8]};
`;

const agentAvatar = css`
    margin: 10px;
`;

const letterSpacing = css`
    letter-spacing: 0.25px;
`;

export const WithSlides: Story<CardProps> = () => (
    <Card>
        <CardMedia
            src={[
                { src: house1Src, alt: 'Home 1' },
                { src: house2Src, alt: 'Home 2' },
                {
                    src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
                    alt: 'Lounge',
                },
                {
                    src: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800',
                    alt: 'Bathroom',
                },
            ]}
        />
        <ActionButton variant="outlined" cssOverrides={actionButtonFav}>
            hotel_class
        </ActionButton>
        <CardSection borderBottom>
            <Text
                size="xsm"
                weight="bolder"
                color={grays[1]}
                cssOverrides={[transformUppercase, letterSpacing]}
            >
                Detached House . 3,426 SQFT
            </Text>
            <Text size="xxlg">$1,250,000</Text>
            <Text size="sm" color={grays[3]}>
                742 Evergreen Terrace
            </Text>
        </CardSection>
        <CardSection borderBottom>
            <Row>
                <Col sm={12} hStack={1}>
                    <Icon variant="outlined" color={grays[5]}>
                        bed
                    </Icon>
                    <Text weight="bold">3</Text>
                    <Text color={grays[3]}>bedrooms</Text>
                </Col>
                <Col sm={12} hStack={1}>
                    <Icon variant="outlined" color={grays[5]}>
                        bathtub
                    </Icon>
                    <Text weight="bold">2</Text>
                    <Text color={grays[3]}>bathrooms</Text>
                </Col>
            </Row>
        </CardSection>
        <CardSection cssOverrides={agentSection}>
            <Row align="start-center">
                <Avatar
                    src={avatarSrc}
                    shape="circle"
                    size={30}
                    cssOverrides={agentAvatar}
                />
                <Row noGlutters direction="column">
                    <Text size="sm" weight="bold">
                        Tiffany Heffner
                    </Text>
                    <Text size="xsm" color={grays[3]}>
                        (555) 555-4321
                    </Text>
                </Row>
            </Row>
        </CardSection>
        <Button
            size="block"
            iconRight="keyboard_arrow_right"
            cssOverrides={transformUppercase}
        >
            <Text size="xsm" weight="bold">
                Schedule Showing
            </Text>
        </Button>
    </Card>
);
