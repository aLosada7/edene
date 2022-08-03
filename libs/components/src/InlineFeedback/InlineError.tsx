import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';

import { inlineError } from './styles';
import type { InlineFeedbackProps } from './types';

export const InlineError = ({
    children,
    cssOverrides,
    ...props
}: InlineFeedbackProps): EmotionJSX.Element => (
    <div
        css={(theme: any) => [inlineError(theme.InlineFeedback), cssOverrides]}
        role="alert"
        {...props}
    >
        {children}
    </div>
);
