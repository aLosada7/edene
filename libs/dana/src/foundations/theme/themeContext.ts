import { createContext } from 'react';

export interface IThemeContext {
    theme: any;
    onThemeSelected: any;
}

export const ThemeContext = createContext({} as IThemeContext);
