import { SerializedStyles } from '@emotion/react';

import { generateSourceId } from '@edene/foundations';

import { Input } from '../../Input';
import { Label } from '../../Label';
import { useRadioGroup } from '../useRadioGroup';
import { radio, radioInput } from '../styles';

export interface RadioProps {
    id?: string;
    checked?: boolean;
    value?: string;
    children: string;
    cssOverrides?: SerializedStyles;
    cssLabelOverrides?: SerializedStyles;
}

export const Radio = ({
    id,
    children,
    cssOverrides,
    cssLabelOverrides,
    ...props
}: RadioProps) => {
    const radioId = id || generateSourceId();
    const group = useRadioGroup();

    return (
        <Label
            cssOverrides={
                cssLabelOverrides ? [radio, cssLabelOverrides] : radio
            }
            text={children}
        >
            <Input
                cssOverrides={
                    cssOverrides ? [radioInput, cssOverrides] : radioInput
                }
                type="radio"
                id={radioId}
                checked={group.value === props.value}
                onChange={group.onChange}
                {...props}
            />
        </Label>
    );
};
