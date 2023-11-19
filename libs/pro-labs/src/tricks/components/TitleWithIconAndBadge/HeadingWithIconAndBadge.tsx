import { Badge, Heading, Icon, Row } from '@edene/components';
import { css } from '@emotion/react';

const HeadingWithIconAndBadge = () => (
    <Row align="center-center" gap={1}>
        <Icon variant="outlined" color="primary" size="large">
            home
        </Icon>
        <Heading type="h3">GALZO2R4I5ZK</Heading>
        <Badge
            css={css`
                height: fit-content;
                margin-top: auto;
                margin-bottom: auto;
                margin-left: 6px;
            `}
        >
            ACTIVE
        </Badge>
    </Row>
);

export default HeadingWithIconAndBadge;
