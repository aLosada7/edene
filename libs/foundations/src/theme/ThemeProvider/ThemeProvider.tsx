import { createContext, useContext, useState } from 'react';

import { defaultTheme } from '../defaultThemes/defaultTheme';
import { Theme } from '../types/Theme';
import { ThemeModel, ThemeType } from './types';

const ThemeContext = createContext({} as ThemeModel);

export const ThemeProvider = ({ theme: userTheme, children }: any) => {
    const [themeValue, setThemeValue] = useState<ThemeType>();

    const setTheme = (theme: ThemeType) => {
        setThemeValue(theme);
    };

    const theme: Theme = {
        ...defaultTheme,
        ...userTheme,
        ...themeValue,
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
