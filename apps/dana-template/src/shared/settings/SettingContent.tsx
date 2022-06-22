import { ActionButton, Container, Row, Title, Text } from '@dana-components';
import { defaultTheme, MaterialIcon, Theme, useThemeContext } from '@dana';

import {
    settingsContent,
    settingsContentHeader,
    settingsContentHeaderContent,
    settingsThemeOption,
} from './styles';
import { tealPalette } from '../palettes/tealPalette';
import { pinkPalette } from '../palettes/pinkPalette';

interface SettingContentProps {
    open: boolean;
    onClose: () => void;
}

const themes: Theme[] = [defaultTheme, tealPalette, pinkPalette];

export const SettingContent = ({ open, onClose }: SettingContentProps) => {
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
                        <MaterialIcon>settings</MaterialIcon>
                        <Title>Settings</Title>
                    </Row>
                    <ActionButton onClick={onClose}>close</ActionButton>
                </Row>
            </Container>

            <Container mt={4}>
                <Row>
                    {themes.map((themeOption: Theme) => (
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
                            <Text>{themeOption.name}</Text>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
