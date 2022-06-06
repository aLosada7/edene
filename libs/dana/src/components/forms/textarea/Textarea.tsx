import { SerializedStyles } from '@emotion/react';

import { Props } from '../../../helpers';
import { textarea } from './styles';
import { input } from '../input/styles';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormInput } from '../input/types';
import { Label } from '../../label';
import { FormGroup } from '../../FormGroup';

export interface TextareaProps extends Props, FormInput {
    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const Textarea = ({
    id,
    label: labelText,
    optional = false,
    cssLabelOverrides,
    ...props
}: TextareaProps) => {
    const inputId = id || generateSourceId();

    const label = labelText ? (
        <Label
            text={labelText}
            optional={optional}
            cssOverrides={cssLabelOverrides}
        ></Label>
    ) : null;

    return (
        <FormGroup>
            {label}
            <textarea css={[input, textarea]} id={inputId}></textarea>
        </FormGroup>
    );
};
