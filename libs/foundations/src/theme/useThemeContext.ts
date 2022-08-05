import { Theme } from '@emotion/react';
import { useContext } from 'react';

import { defaultTheme } from './defaultThemes';
import { ThemeContext } from './themeContext';

export default function useThemeContext() {
    const { theme, onThemeSelected } = useContext(ThemeContext);

    const setTheme = (theme: Theme) => {
        onThemeSelected(theme);
    };

    if (!theme) {
        return { theme: defaultTheme, setTheme };
    }

    return { theme, setTheme };
}
