import { css } from '@emotion/react';

import { Icon, Heading, Badge, Row } from '@edene/components';

const HeadingWithIconAndBadge = () => (
    <Row gap={1}>
        <Heading
            size="h3"
            icon={
                <Icon
                    variant="outlined"
                    color="primary"
                    size="large"
                    css={css`
                        margin-right: 6px;
                    `}
                >
                    home
                </Icon>
            }
        >
            GALZO2R4I5ZK
        </Heading>
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
