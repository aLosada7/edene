import { ActionButton, Container, Row, Title, Text } from '@edene/components';
import { defaultTheme, Icon, Theme, useThemeContext } from '@edene/foundations';

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

const themes: Partial<Theme>[] = [defaultTheme, tealPalette, pinkPalette];

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
                        <Icon>settings</Icon>
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
