export interface Theme {
    title: string;
    lightColor?: string;
    color: string;
    hover: string;
    white?: string;
    black?: string;
    grays: Record<string, string>;
    colors?: Record<string, unknown>;
    header?: any;
    label?: any;
    sideNav?: any;
    text: string;
    headings: any;
}
