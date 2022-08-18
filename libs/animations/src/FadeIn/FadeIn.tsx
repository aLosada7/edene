import { ReactNode } from 'react';

import { fadeIn } from './styles';

export interface FadeInProps {
    delay?: string;
    children: ReactNode;
}

export const FadeIn = (props: FadeInProps) => {
    const { delay = '.5s', children } = props;

    return <div css={fadeIn(delay)}>{children}</div>;
};
