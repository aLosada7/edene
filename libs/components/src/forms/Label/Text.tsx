import { visuallyHidden as _visuallyHidden } from '@edene/foundations';
import { css } from '@emotion/react';

import { LabelProps } from './Label';
import { labelText } from './styles';

const visuallyHidden = css`
    ${_visuallyHidden}
`;

export const Text = ({ text, hideLabel }: LabelProps) => (
    <div
        css={(theme: any) => [
            labelText(theme.label && theme),
            hideLabel ? visuallyHidden : '',
        ]}
    >
        {text}{' '}
        {/* {optional ? (
            <span css={(theme: any) => optionalText(theme.label && theme)}>
                Optional
            </span>
        ) : (
            ''
        )} */}
    </div>
);
