import {
    useTheme,
    visuallyHidden as _visuallyHidden,
} from '@edene/foundations';
import { css } from '@emotion/react';

import { LabelProps } from './Label';
import { labelText } from './styles';

const visuallyHidden = css`
    ${_visuallyHidden}
`;

export const Text = ({ text, hideLabel }: LabelProps) => {
    const { theme } = useTheme();

    return (
        <div css={[labelText({ theme }), hideLabel ? visuallyHidden : '']}>
            {text}
        </div>
    );
};
