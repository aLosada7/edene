import { headline as headlineAsObj, textSans as textSansAsObj } from './api';

import {
    FontScaleArgs,
    FontScaleFunctionStr,
    HeadlineSizes,
    TextSansSizes,
} from './types';

import { objectStylesToString } from './object-styles-to-string';

type TypographyApi<Sizes> = {
    [key in keyof Sizes]: FontScaleFunctionStr;
};

const headline = Object.fromEntries(
    Object.entries(headlineAsObj).map(([key, func]) => {
        return [
            key,
            (options?: FontScaleArgs) => objectStylesToString(func(options)),
        ];
    })
) as TypographyApi<HeadlineSizes>;

const textSans = Object.fromEntries(
    Object.entries(textSansAsObj).map(([key, func]) => {
        return [
            key,
            (options?: FontScaleArgs) => objectStylesToString(func(options)),
        ];
    })
) as TypographyApi<TextSansSizes>;

export { headline, textSans };
