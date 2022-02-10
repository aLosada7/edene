import { createContext } from 'react';

// export interface ITheme {
//     [key: string]: any;
// }

export interface IThemeContext {
    // theme: ITheme;
    theme: any;
}

export const ThemeContext = createContext({} as IThemeContext);
