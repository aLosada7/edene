import { headline as headlineAsObj } from './api';

import { FontScaleArgs, FontScaleFunctionStr, HeadlineSizes } from './types';

import { objectStylesToString } from './object-styles-to-string';

type TypographyApi<Sizes> = {
    [key in keyof Sizes]: FontScaleFunctionStr;
};

/**
 *
 * ```
 * font-family: 'GH Guardian Headline';
 * ```
 *
 * `headline.xxxsmall()` -> 17px
 *
 * `headline.xxsmall()` -> 20px
 *
 * `headline.xsmall()` -> 24px
 *
 * `headline.small()` -> 28px
 *
 * `headline.medium()` -> 34px
 *
 * `headline.large()` -> 42px
 *
 * `headline.xlarge()` -> 50px
 */
const headline = Object.fromEntries(
    Object.entries(headlineAsObj).map(([key, func]) => {
        return [
            key,
            (options?: FontScaleArgs) => objectStylesToString(func(options)),
        ];
    })
) as TypographyApi<HeadlineSizes>;

export { headline };
