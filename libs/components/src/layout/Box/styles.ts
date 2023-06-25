import { css } from '@emotion/react';

import { BoxProps } from './types';

export const box = (props: Omit<BoxProps, 'children'>) => css`
    ${props.m && `margin: calc(${props.m} * 0.25rem)`};
    ${props.py &&
    `margin-top: calc(${props.py} * 0.25rem); margin-bottom: calc(${props.py} * 0.25rem)`};
    ${props.mx &&
    `margin-right: calc(${props.mx} * 0.25rem); margin-left: calc(${props.px} * 0.25rem)`};
    ${props.mt && `margin-top: calc(${props.mt} * 0.25rem)`};
    ${props.mr && `margin-right: calc(${props.mr} * 0.25rem)`};
    ${props.mb && `margin-bottom: calc(${props.mb} * 0.25rem)`};
    ${props.ml && `margin-left: calc(${props.ml} * 0.25rem)`};

    ${props.p && `padding: calc(${props.p} * 0.25rem)`};
    ${props.py &&
    `padding-top: calc(${props.py} * 0.25rem); margin-bottom: calc(${props.py} * 0.25rem)`};
    ${props.px &&
    `padding-right: calc(${props.px} * 0.25rem); margin-left: calc(${props.px} * 0.25rem)`};
    ${props.pt && `padding-top: calc(${props.pt} * 0.25rem)`};
    ${props.pr && `padding-right: calc(${props.pr} * 0.25rem)`};
    ${props.pb && `padding-bottom: calc(${props.pb} * 0.25rem)`};
    ${props.pl && `padding-left: calc(${props.pl} * 0.25rem)`};
`;
