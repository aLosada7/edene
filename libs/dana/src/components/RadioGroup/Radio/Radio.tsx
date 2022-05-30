import { generateSourceId } from '../../../foundations/accesibility';
import { Input } from '../../forms';
import { Label } from '../../label';
import { useRadioGroup } from '../useRadioGroup';
import { radio, radioInput } from '../styles';

export interface RadioProps {
    id?: string;
    checked?: boolean;
    value?: string;
    children: string;
}

export const Radio = ({ id, children, ...props }: RadioProps) => {
    const radioId = id || generateSourceId();
    const group = useRadioGroup();

    return (
        <Label cssOverrides={radio} text={children}>
            <Input
                cssOverrides={radioInput}
                type="radio"
                id={radioId}
                checked={group.value === props.value}
                onChange={group.onChange}
                {...props}
            />
        </Label>
    );
};
