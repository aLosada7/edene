import { ReactElement } from 'react';

import { fadeIn } from './styles';

export interface FadeInProps {
    delay?: string;
    children: ReactElement | ReactElement[];
}

export const FadeIn = ({ delay = '.5s', children }: FadeInProps) => {
    return <div css={fadeIn(delay)}>{children}</div>;
};
