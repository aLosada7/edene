import { Fragment, LabelHTMLAttributes } from 'react';
import { Props, useTheme } from '@edene/foundations';

import { label, labelText } from './styles';
import { SupportingText } from './SupportingText';

export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        Props {
    /** The label text*/
    text: string;

    /** Additional text or component that appears below the label */
    supportingText?: string;

    /** Visually hides the label*/
    hideLabel?: boolean;
}

export const Label = ({
    text,
    supportingText,
    hideLabel = false,
    css,
    children,
    ...props
}: LabelProps) => {
    const { theme } = useTheme();

    return (
        <label css={() => [label, labelText({ theme }), css]} {...props}>
            {supportingText ? (
                <SupportingText hideLabel={hideLabel}>
                    {supportingText}
                </SupportingText>
            ) : (
                ''
            )}
            {hideLabel ? (
                children
            ) : (
                <Fragment>
                    {children}
                    <span>{text}</span>
                </Fragment>
            )}
        </label>
    );
};
