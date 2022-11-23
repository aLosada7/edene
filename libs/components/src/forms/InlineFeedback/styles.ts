import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { text } from '@edene/foundations';

import { InlineFeedbackThemeDefault } from './theme';

const inlineMessage = css`
    display: block;
    margin-top: 0.25rem;
    ${text.small({ lineHeight: 'regular' })};
`;

export const inlineError = (
    InlineFeedback = InlineFeedbackThemeDefault.InlineFeedback
): SerializedStyles => css`
    ${inlineMessage};
    color: ${InlineFeedback.textError};
`;

export const inlineSuccess = (
    InlineFeedback = InlineFeedbackThemeDefault.InlineFeedback
): SerializedStyles => css`
    ${inlineMessage};
    color: ${InlineFeedback.textSuccess};
`;
