import {
    ActionButton,
    Container,
    Row,
    Heading,
    Text,
    Icon,
    Box,
} from '@edene/components';
import {
    defaultTheme,
    Theme,
    useTheme,
    tealTheme,
    blueTheme,
    grays,
} from '@edene/foundations';

import {
    settingsContent,
    settingsContentHeader,
    settingsContentHeaderContent,
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
            <Box px={4} py={2} css={settingsContentHeader(theme)}>
                <Row
                    align="space-between-center"
                    noGlutters
                    css={settingsContentHeaderContent}
                >
                    <Row align="start-center" noGlutters>
                        <Heading
                            size="h3"
                            color={grays[9]}
                            icon={<Icon mr={1}>settings</Icon>}
                        >
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
                            <Text>{themeOption.title as string}</Text>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
