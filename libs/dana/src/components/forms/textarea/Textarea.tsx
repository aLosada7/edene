import { Children, cloneElement, ReactElement, useRef, useState } from 'react';
import { Props } from '../../../helpers';
import { textarea } from './styles';
import { ChevronDownIcon } from '../../../foundations/icons';
import { field, input } from '../input/styles';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormInput } from '../input/types';
import { Button, Label } from '../..';
import { SerializedStyles } from '@emotion/react';

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
        <div role="group" css={field}>
            {label}
            <textarea css={[input, textarea]} id={inputId}></textarea>
        </div>
    );
};
