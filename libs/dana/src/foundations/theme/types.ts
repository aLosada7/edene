export interface Palette {
    primary: PaletteSchema;
    secondary: PaletteSchema;
    accent: PaletteSchema;
    grays: any;
}
export interface PaletteSchema {
    background: string;
    color: string;
    hover: string;
}

export interface Theme {
    name: string;
    palette: Palette;
    header?: any;
    label?: any;
    sideNav?: any;
    text: string;
    title: any;
}
