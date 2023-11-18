import {
    Avatar,
    Card,
    CardHeader,
    CardSection,
    Row,
    Text,
} from '@edene/components';
import { css } from '@emotion/react';

const Scoring = () => (
    <Card
        css={css`
            text-align: left;
        `}
    >
        <CardHeader>SCORING</CardHeader>
        <CardSection>
            <Row align="space-around-center" py={1}>
                <Avatar size={100} shape="circle" />
                <Row direction="column" px={2}>
                    <Text type="regular" weight="bold">
                        Danial Berry
                    </Text>
                    <Text type="xsmall" weight="bold">
                        Jason Chapman, Jake Sullivan
                    </Text>
                    <Text type="xsmall" weight="bold">
                        11:20 / 1st
                    </Text>
                </Row>
            </Row>
        </CardSection>
    </Card>
);

export default Scoring;
