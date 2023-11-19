import {
    ActionButton,
    Box,
    Container,
    Heading,
    Icon,
    Row,
    Text,
} from '@edene/components';
import {
    blueTheme,
    defaultTheme,
    grays,
    tealTheme,
    Theme,
    useTheme,
} from '@edene/foundations';

import {
    settingsContent,
    settingsContentHeader,
    settingsThemeOption,
} from './styles';

interface SettingsContentProps {
    open: boolean;
    onClose: () => void;
}

const themes: Partial<Theme>[] = [defaultTheme, tealTheme, blueTheme];

export const SettingsContent = ({ open, onClose }: SettingsContentProps) => {
    const { theme, setTheme } = useTheme();

    return (
        <div css={settingsContent(open)}>
            <Box p={4} css={settingsContentHeader(theme)}>
                <Row align="space-between-center" noGlutters>
                    <Row align="start-center" noGlutters gap={2}>
                        <Icon color={grays[9]}>settings</Icon>
                        <Heading type="h3" color={grays[9]}>
                            Settings
                        </Heading>
                    </Row>
                    <ActionButton onClick={onClose}>close</ActionButton>
                </Row>
            </Box>

            <Container>
                <Row>
                    {themes.map((themeOption: Partial<Theme>) => (
                        <div
                            key={themeOption.title}
                            style={{
                                borderColor:
                                    theme.color === themeOption.color
                                        ? themeOption.color
                                        : 'transparent',
                            }}
                            css={settingsThemeOption}
                            onClick={() => setTheme(themeOption)}
                        >
                            <span
                                style={{
                                    backgroundColor: themeOption.color,
                                }}
                            />
                            <Text type="regular">
                                {themeOption.title as string}
                            </Text>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
