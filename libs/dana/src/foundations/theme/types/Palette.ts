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
