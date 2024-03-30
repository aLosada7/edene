import { ReactNode } from 'react';
import {
    useTheme,
    visuallyHidden as _visuallyHidden,
} from '@edene/foundations';
import { css } from '@emotion/react';

import { supportingText } from './styles';

const visuallyHidden = css`
    ${_visuallyHidden}
`;

export const SupportingText = ({
    hideLabel,
    children,
}: {
    hideLabel?: boolean;
    children: ReactNode;
}) => {
    const { theme } = useTheme();

    return (
        <p css={[supportingText({ theme }), hideLabel ? visuallyHidden : '']}>
            {children}
        </p>
    );
};
