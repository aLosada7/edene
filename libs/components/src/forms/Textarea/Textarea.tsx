import { InputHTMLAttributes } from 'react';
import { generateSourceId,Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { FormGroup } from '../FormGroup';
import { input } from '../Input/styles';
import { FormInput } from '../Input/types';
import { Label } from '../Label';
import { textarea } from './styles';

export interface TextareaProps
    extends InputHTMLAttributes<HTMLTextAreaElement>,
        Props,
        FormInput {
    cssLabel?: SerializedStyles | SerializedStyles[];
}

export const Textarea = (props: TextareaProps) => {
    const { id, label: labelText, css, cssLabel, ...rest } = props;

    const inputId = id || generateSourceId();

    const label = labelText ? (
        <Label text={labelText} css={cssLabel}></Label>
    ) : null;

    return (
        <FormGroup>
            {label}
            <textarea
                id={inputId}
                css={[input, textarea, css]}
                {...rest}
            ></textarea>
        </FormGroup>
    );
};
