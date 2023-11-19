import { heading as headlineAsObj, text as textSansAsObj } from './api';
import { objectStylesToString } from './object-styles-to-string';
import {
    FontScaleArgs,
    FontScaleFunctionStr,
    HeadingSizes,
    TextSansSizes,
} from './types';

type TypographyApi<Sizes> = {
    [key in keyof Sizes]: FontScaleFunctionStr;
};

const heading = Object.fromEntries(
    Object.entries(headlineAsObj).map(([key, func]) => {
        return [
            key,
            (options?: FontScaleArgs) => objectStylesToString(func(options)),
        ];
    })
) as TypographyApi<HeadingSizes>;

const text = Object.fromEntries(
    Object.entries(textSansAsObj).map(([key, func]) => {
        return [
            key,
            (options?: FontScaleArgs) => objectStylesToString(func(options)),
        ];
    })
) as TypographyApi<TextSansSizes>;

export { heading, text };
export * from './types';
