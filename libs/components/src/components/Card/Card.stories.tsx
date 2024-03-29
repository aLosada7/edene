import { grays, transformUppercase } from '@edene/foundations';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import avatarSrc from '../../../assets/img/avatar.jpeg';
import { Icon } from '../../icons';
import { Col, Row } from '../../layout/Grid';
import { Text } from '../../typography/Text';
import { ActionButton } from '../ActionButton';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Card, CardMedia, CardProps,CardSection } from './index';

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
            <Text type="regular" color="hsl(212, 56%, 16%)">
                Basics of Angular
            </Text>
            <Text type="regular" color="hsl(212, 18%, 35%)">
                Introductory course for Angular and framework basics
            </Text>
            <Button variant="outlined" size="block">
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

const agentSection = css`
    background-color: ${grays[8]};
`;

const agentAvatar = css`
    margin: 10px;
`;

const letterSpacing = css`
    letter-spacing: 0.25px;
`;

const noTopBorderRadius = css`
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

export const WithSlides: Story<CardProps> = () => (
    <Card>
        <CardMedia
            src={[
                {
                    src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
                    alt: 'Lounge',
                },
                {
                    src: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800',
                    alt: 'Bathroom',
                },
            ]}
            imageSize="d"
        />
        <ActionButton variant="outlined" css={actionButtonFav}>
            hotel_class
        </ActionButton>
        <CardSection borderBottom>
            <Text
                type="xsmall"
                weight="bold"
                color={grays[1]}
                css={[transformUppercase, letterSpacing]}
            >
                Detached House . 3,426 SQFT
            </Text>
            <Text type="regular" weight="bold">
                $1,250,000
            </Text>
            <Text type="small" color={grays[3]}>
                742 Evergreen Terrace
            </Text>
        </CardSection>
        <CardSection borderBottom>
            <Row>
                <Col align="vertical-center" sm={12} gap={1}>
                    <Icon variant="outlined" color={grays[3]}>
                        bed
                    </Icon>
                    <Text type="regular">3</Text>
                    <Text type="regular" color={grays[3]}>
                        bedrooms
                    </Text>
                </Col>
                <Col align="vertical-center" sm={12} gap={1}>
                    <Icon variant="outlined" color={grays[3]}>
                        bathtub
                    </Icon>
                    <Text type="regular">2</Text>
                    <Text type="regular" color={grays[3]}>
                        bedrooms
                    </Text>
                </Col>
            </Row>
        </CardSection>
        <CardSection css={agentSection}>
            <Row align="start-center">
                <Avatar
                    src={avatarSrc}
                    shape="circle"
                    size={30}
                    css={agentAvatar}
                />
                <Row noGlutters direction="column">
                    <Text weight="bold">Tiffany Heffner</Text>
                    <Text type="xsmall" color={grays[3]}>
                        (555) 555-4321
                    </Text>
                </Row>
            </Row>
        </CardSection>
        <Button
            size="block"
            icon="keyboard_arrow_right"
            iconSide="right"
            css={[transformUppercase, noTopBorderRadius]}
        >
            <Text type="xsmall" weight="bold">
                Schedule Showing
            </Text>
        </Button>
    </Card>
);
