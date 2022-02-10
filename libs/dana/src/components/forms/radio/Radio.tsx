import { generateSourceId } from '../../../foundations/accesibility';
import { Input } from '..';
import { Label } from '../../label';
import { radio, radioInput } from './styles';

export interface RadioProps {
    id?: string;
    checked?: boolean;
    value?: string;
    onChange?: any;
    children: string;
}

export const Radio = ({
    id,
    checked = false,
    value,
    onChange,
    children,
    ...props
}: RadioProps) => {
    const radioId = id || generateSourceId();

    return (
        <Label cssOverrides={radio} text={children}>
            <Input
                cssOverrides={radioInput}
                type="radio"
                id={radioId}
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </Label>
    );
};
