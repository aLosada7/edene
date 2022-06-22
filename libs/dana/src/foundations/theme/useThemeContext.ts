import { Theme } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';

export default function useThemeContext() {
    const { theme, onThemeSelected } = useContext(ThemeContext);

    if (!theme) {
        throw new Error('useThemeContext must be used within ThemeProvider');
    }

    const setTheme = (theme: Theme) => {
        onThemeSelected(theme);
    };

    return { theme, setTheme };
}
