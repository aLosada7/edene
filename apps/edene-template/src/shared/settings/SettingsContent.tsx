import {
    ActionButton,
    Container,
    Row,
    Title,
    Text,
    Icon,
} from '@edene/components';
import {
    defaultTheme,
    Theme,
    useThemeContext,
    tealTheme,
    blueTheme,
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
    const { theme, setTheme } = useThemeContext();

    return (
        <div css={settingsContent(open)}>
            <Container cssOverrides={settingsContentHeader(theme)}>
                <Row
                    align="space-between-center"
                    noGlutters
                    cssOverrides={settingsContentHeaderContent}
                >
                    <Row align="start-center" noGlutters>
                        <Icon color={theme.white}>settings</Icon>
                        <Title>Settings</Title>
                    </Row>
                    <ActionButton onClick={onClose}>close</ActionButton>
                </Row>
            </Container>

            <Container mt={4}>
                <Row>
                    {themes.map((themeOption: Partial<Theme>) => (
                        <div
                            key={themeOption.name}
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
                            <Text>{themeOption.name as string}</Text>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
