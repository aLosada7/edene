import { css } from '@emotion/react';

import { Icon, Heading, Badge, Group } from '@edene/components';

const HeadingWithIconAndBadge = () => (
    <Group>
        <Heading
            size="h3"
            weight="light"
            icon={
                <Icon
                    variant="outlined"
                    color="primary"
                    size="large"
                    cssOverrides={css`
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
            cssOverrides={css`
                height: fit-content;
                margin-top: auto;
                margin-bottom: auto;
                margin-left: 6px;
            `}
        >
            ACTIVE
        </Badge>
    </Group>
);

export default HeadingWithIconAndBadge;
