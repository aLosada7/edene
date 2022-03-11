import { defaultTheme } from './defaultTheme';
import { IThemeContext, ThemeContext } from './themeContext';

export const DanaTheme = ({ theme, children }: any) => {
    const providerValue: IThemeContext = {
        theme: { ...defaultTheme, ...theme },
    };

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
};
