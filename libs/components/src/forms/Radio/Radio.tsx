import { SerializedStyles } from '@emotion/react';

import { generateSourceId } from '@edene/foundations';

import { Input } from '../Input';
import { Label } from '../Label';
import { useRadioGroup } from './useRadioGroup';
import { radio, radioInput } from './styles';

export interface RadioProps {
    id?: string;
    checked?: boolean;
    value?: string;
    children: string;
    cssOverrides?: SerializedStyles;
    cssLabel?: SerializedStyles;
}

export const Radio = (props: RadioProps) => {
    const { id, children, cssOverrides, cssLabel, ...rest } = props;
    const radioId = id || generateSourceId();
    const group = useRadioGroup();

    return (
        <Label css={cssLabel ? [radio, cssLabel] : radio} text={children}>
            <Input
                css={[radioInput, cssOverrides] as SerializedStyles[]}
                type="radio"
                id={radioId}
                checked={group.value === props.value}
                onChange={group.onChange}
                {...rest}
            />
        </Label>
    );
};
