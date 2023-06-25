import { inlineSuccess } from './styles';
import { InlineFeedbackProps } from './types';

export const InlineSuccess = (props: InlineFeedbackProps) => {
    const { children, css, ...rest } = props;

    return (
        <div
            role="alert"
            css={(theme: any) => [inlineSuccess(theme.InlineFeedback), css]}
            {...rest}
        >
            {children}
        </div>
    );
};
