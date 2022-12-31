import { css } from '@emotion/react';

import { BoxProps } from './index';

export const box = (props: Omit<BoxProps, 'children'>) => css`
    ${props.mv &&
    `margin-top: calc(${props.mv} * 0.25rem); margin-bottom: calc(${props.mv} * 0.25rem)`};
    ${props.mh &&
    `margin-right: calc(${props.mh} * 0.25rem); margin-left: calc(${props.mv} * 0.25rem)`};

    ${props.mt && `margin-top: calc(${props.mt} * 0.25rem)`};
    ${props.mr && `margin-right: calc(${props.mr} * 0.25rem)`};
    ${props.mt && `margin-bottom: calc(${props.mb} * 0.25rem)`};
    ${props.mt && `margin-left: calc(${props.ml} * 0.25rem)`};
`;
