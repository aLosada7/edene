import { useState } from 'react';

import { defaultTheme } from './defaultThemes/defaultTheme';
import { ThemeContext } from './themeContext';
import { Theme } from './types/Theme';

export const EdeneTheme = ({ theme: userTheme, children }: any) => {
    const [themeValue, setThemeValue] = useState<Theme>();

    const onThemeSelected = (theme: Theme) => {
        setThemeValue(theme);
    };

    const theme: Theme = {
        ...defaultTheme,
        ...userTheme,
        ...themeValue,
    };

    return (
        <ThemeContext.Provider value={{ theme, onThemeSelected }}>
            {children}
        </ThemeContext.Provider>
    );
};
