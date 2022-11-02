import { css } from '@emotion/react';

import {
    Badge,
    CardSection,
    Icon,
    Title,
    Text,
    Button,
} from '@edene/components';
import { grays } from '@edene/foundations';

const marginLeft = css`
    margin-left: 2px;
`;

export const ClassroomSectionComponent = ({
    icon,
    iconColor,
    badgeColor,
    title,
    description,
    mainAction,
    secondaryAction,
    ...props
}: {
    borderRight?: boolean;
    borderBottom?: boolean;
    icon: string;
    iconColor: string;
    badgeColor: string;
    title: string;
    description: string;
    mainAction: string;
    secondaryAction: string;
}) => (
    <CardSection flex={50} {...props}>
        <Badge color={iconColor}>
            <Icon size="large" color={badgeColor}>
                {icon}
            </Icon>
        </Badge>
        <Title mt={4} mb={2}>
            {title}
        </Title>
        <Text size="sm" color={grays[3]} mb={2}>
            {description}
        </Text>

        <Button size="small">{mainAction}</Button>
        <Button size="small" variant="outlined" cssOverrides={marginLeft}>
            {secondaryAction}
        </Button>
    </CardSection>
);
