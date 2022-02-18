export interface ThemeMin {
    background: string;
    color: string;
    hover: string;
}

export interface Theme {
    title: string;
    default: ThemeMin;
    primary: ThemeMin;
    accent?: ThemeMin;
    header?: any;
    label?: any;
    sideNav?: any;
}
