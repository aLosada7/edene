export type ScaleUnit = 'rem' | 'px';
export type Category = 'heading' | 'text';
export type LineHeight = 'tight' | 'regular' | 'loose'; // [1.15, 1.35, 1.5]
export type FontWeight = 'regular' | 'bold'; // [400, 600]
export type FontStyle = 'normal' | 'italic';
export type TextAlign = 'inherit' | 'left' | 'center' | 'right';
export type FontWeightDefinition = { hasItalic: boolean };
export type Option<A> = A | null;

export type TypographyStyles = {
    fontFamily: string;
    fontSize: string | number;
    lineHeight: string | number;
    fontWeight?: number;
    fontStyle?: string;
};
export type TypographySizes = {
    [key in string]: number;
};

export interface HeadingpieceSizes extends TypographySizes {
    small: number;
    medium: number;
    large: number;
}

export interface HeadingSizes extends TypographySizes {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
}
export interface BodySizes extends TypographySizes {
    small: number;
    medium: number;
}
export interface TextSansSizes extends TypographySizes {
    xxsmall: number; // 10px
    xsmall: number; // 12px
    small: number; // 14px
    regular: number; // 16px
}

export type Fs = (category: Category) => (
    level: string,
    {
        lineHeight,
        fontWeight,
        fontStyle,
        unit,
    }: {
        lineHeight: LineHeight;
        fontWeight: FontWeight;
        fontStyle: Option<FontStyle>;
        unit: ScaleUnit;
    }
) => TypographyStyles;

export type FontScaleFunction = (options?: FontScaleArgs) => TypographyStyles;

// returns styles as a template literal
export type FontScaleFunctionStr = (options?: FontScaleArgs) => string;

export interface FontScaleArgs {
    lineHeight?: LineHeight;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    unit?: ScaleUnit;
}
