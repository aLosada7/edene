import { IThemeContext, ThemeContext } from './themeContext';

export const ThemeProvider = ({ theme, children }: any) => {
    const providerValue: IThemeContext = { theme };

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
};
