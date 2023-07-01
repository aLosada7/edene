export interface Color {
    color?: string;
}

export interface BackgroundColor {
    backgroundColor?: string;
}
interface ITheme {
    title: string;
    lightColor?: string;
    color: string;
    hover: string;
    white?: string;
    black?: string;
    grays: Record<string, string>;
    colors?: Record<string, unknown>;
    header?: BackgroundColor;
    label?: any;
    sideNav?: any;
    // text: string;

    text?: Color;
    heading?: Color;
}

export type Theme = Required<ITheme>;
export type ThemeType = Theme | Partial<Theme>;

export interface ThemeModel {
    theme: Theme;
    setTheme: (theme: ThemeType) => void;
}
