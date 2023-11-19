import { ReactNode } from 'react';
import { generateSourceId,Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Input } from '../Input';
import { Label } from '../Label';
import { radio, radioInput } from './styles';
import { useRadioGroup } from './useRadioGroup';

export interface RadioProps extends Props {
    id?: string;
    checked?: boolean;
    value?: string;
    children: ReactNode;
}

export const Radio = (props: RadioProps) => {
    const { id, children, css, ...rest } = props;
    const radioId = id || generateSourceId();
    const group = useRadioGroup();

    return (
        <Label css={radio} text={children as string}>
            <Input
                css={[radioInput, css] as SerializedStyles[]}
                type="radio"
                id={radioId}
                checked={group.value === props.value}
                onChange={group.onChange}
                {...rest}
            />
        </Label>
    );
};
