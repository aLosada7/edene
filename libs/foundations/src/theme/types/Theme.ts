export interface Theme {
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

export interface Color {
    color?: string;
}

export interface BackgroundColor {
    backgroundColor?: string;
}
