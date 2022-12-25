import { SerializedStyles } from '@emotion/react';

import { Props, generateSourceId } from '@edene/foundations';
import { textarea } from './styles';
import { input } from '../Input/styles';
import { FormInput } from '../Input/types';
import { Label } from '../Label';
import { FormGroup } from '../FormGroup';
import { InputHTMLAttributes } from 'react';

export interface TextareaProps
    extends InputHTMLAttributes<HTMLTextAreaElement>,
        Props,
        FormInput {
    cssLabel?: SerializedStyles | SerializedStyles[];
}

export const Textarea = (props: TextareaProps) => {
    const {
        id,
        label: labelText,
        css: cssOverrides,
        cssLabel,
        ...rest
    } = props;

    const inputId = id || generateSourceId();

    const label = labelText ? (
        <Label text={labelText} css={cssLabel}></Label>
    ) : null;

    return (
        <FormGroup>
            {label}
            <textarea
                id={inputId}
                css={[input, textarea, cssOverrides]}
                {...rest}
            ></textarea>
        </FormGroup>
    );
};
