import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '../../foundations/accesibility';
import { ReactNode } from 'react';
import { supportingText } from './styles';
import useThemeContext from '../../foundations/theme/useThemeContext';

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
    const theme = useThemeContext();

    return (
        <p css={[supportingText(theme), hideLabel ? visuallyHidden : '']}>
            {children}
        </p>
    );
};
