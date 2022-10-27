import { inlineSuccess } from './styles';
import type { InlineFeedbackProps } from './types';

export const InlineSuccess = (props: InlineFeedbackProps) => {
    const { children, cssOverrides, ...rest } = {
        ...props,
    };
    return (
        <div
            role="alert"
            css={(theme: any) => [
                inlineSuccess(theme.InlineFeedback),
                cssOverrides,
            ]}
            {...rest}
        >
            {children}
        </div>
    );
};
