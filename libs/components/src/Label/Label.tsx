import { LabelHTMLAttributes, Fragment } from 'react';

import { useThemeContext, Props } from '@edene/foundations';

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

export const Label = (props: LabelProps) => {
    const {
        text,
        supportingText,
        hideLabel = false,
        cssOverrides,
        children,
        ...rest
    } = props;

    const theme = useThemeContext();

    return (
        <label css={() => [label, labelText(theme), cssOverrides]} {...rest}>
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
