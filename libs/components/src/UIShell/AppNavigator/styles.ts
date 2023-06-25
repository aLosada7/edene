import { css } from '@emotion/react';

const primary = 'rgb(18, 18, 18)';
const secondary = 'rgb(72, 172, 152)';

export const appNavigator = css`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const appNavigatorItem = css`
    text-decoration: none;
    color: ${primary};

    :hover,
    &[aria-current='true'] {
        color: ${secondary};
    }
`;
