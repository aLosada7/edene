import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { inlineSuccess } from './styles';
import type { InlineFeedbackProps } from './types';

export const InlineSuccess = ({
    children,
    cssOverrides,
    ...props
}: InlineFeedbackProps): EmotionJSX.Element => (
    <div
        css={(theme: any) => [
            inlineSuccess(theme.InlineFeedback),
            cssOverrides,
        ]}
        role="alert"
        {...props}
    >
        {children}
    </div>
);
