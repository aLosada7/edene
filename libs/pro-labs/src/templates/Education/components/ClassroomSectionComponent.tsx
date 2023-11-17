import {
    Badge,
    CardSection,
    Icon,
    Heading,
    Text,
    Button,
    Row,
    ButtonGroup,
} from '@edene/components';
import { grays } from '@edene/foundations';

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
        <Row direction="column" gap={2} noGlutters>
            <Badge color={iconColor}>
                <Icon size="large" color={badgeColor}>
                    {icon}
                </Icon>
            </Badge>
            <Heading>{title}</Heading>
            <Text size="small" color={grays[3]}>
                {description}
            </Text>
            <ButtonGroup>
                <Button size="small">{mainAction}</Button>
                <Button size="small" variant="outlined">
                    {secondaryAction}
                </Button>
            </ButtonGroup>
        </Row>
    </CardSection>
);
