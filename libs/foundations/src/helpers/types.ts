import { CSSProperties } from 'react';
import { SerializedStyles } from '@emotion/react';

export type ThemeName = 'default';

export interface Props {
    className?: string;
    style?: CSSProperties;
    /**
     * Override component styles by passing in the result of [emotion's `css` function/prop](https://emotion.sh/docs/introduction).
     */
    css?: SerializedStyles | SerializedStyles[];
}
