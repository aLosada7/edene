import { cloneElement, ReactElement } from 'react';

import { underline } from './styles';

type UnderlineStart = 'left' | 'center' | 'right';

export interface UnderlineProps {
    delay?: string;

    start?: UnderlineStart;

    children: ReactElement;
}

export const Underline = (props: UnderlineProps) => {
    const { delay = '.5s', start = 'center', children } = props;

    return cloneElement(children, {
        cssOverrides: underline(delay, start),
    });
};
