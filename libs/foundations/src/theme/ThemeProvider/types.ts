import { Theme } from '../types/Theme';

export type ThemeType = Theme | Partial<Theme>;

export interface ThemeModel {
    theme: Theme;
    setTheme: (theme: ThemeType) => void;
}
