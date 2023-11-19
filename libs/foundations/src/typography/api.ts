import { fs } from './fs';
import type {
    FontScaleArgs,
    FontScaleFunction,
    HeadingSizes,
    TextSansSizes,
} from './types';

type HeadingFunctions = {
    [key in keyof HeadingSizes]: FontScaleFunction;
};

const headlineDefaults: any = {
    lineHeight: 'tight',
    fontWeight: 'regular',
    fontStyle: null,
    unit: 'rem',
};
const headlineFs = fs('heading');

export const heading: HeadingFunctions = {
    h1: (options?: FontScaleArgs) =>
        headlineFs('h1', Object.assign({}, headlineDefaults, options)),
    h2: (options?: FontScaleArgs) =>
        headlineFs('h2', Object.assign({}, headlineDefaults, options)),
    h3: (options?: FontScaleArgs) =>
        headlineFs('h3', Object.assign({}, headlineDefaults, options)),
    h4: (options?: FontScaleArgs) =>
        headlineFs('h4', Object.assign({}, headlineDefaults, options)),
    h5: (options?: FontScaleArgs) =>
        headlineFs('h5', Object.assign({}, headlineDefaults, options)),
    h6: (options?: FontScaleArgs) =>
        headlineFs('h6', Object.assign({}, headlineDefaults, options)),
};

type TextSansFunctions = {
    [key in keyof TextSansSizes]: FontScaleFunction;
};

const textSansDefaults: any = {
    lineHeight: 'loose',
    fontWeight: 'regular',
    fontStyle: null,
    unit: 'rem',
};
const textSansFs = fs('text');

export const text: TextSansFunctions = {
    xxsmall: (options?: FontScaleArgs) =>
        textSansFs('xxsmall', Object.assign({}, textSansDefaults, options)),
    xsmall: (options?: FontScaleArgs) =>
        textSansFs('xsmall', Object.assign({}, textSansDefaults, options)),
    small: (options?: FontScaleArgs) =>
        textSansFs('small', Object.assign({}, textSansDefaults, options)),
    regular: (options?: FontScaleArgs) =>
        textSansFs('regular', Object.assign({}, textSansDefaults, options)),
};
