import { inlineError } from './styles';
import { InlineFeedbackProps } from './types';

export const InlineError = (props: InlineFeedbackProps) => {
    const { children, css: cssOverrides, ...rest } = props;

    return (
        <div
            role="alert"
            css={(theme: any) => [
                inlineError(theme.InlineFeedback),
                cssOverrides,
            ]}
            {...rest}
        >
            {children}
        </div>
    );
};
