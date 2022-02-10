import { Input, Label } from '@dana';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormInput } from '../input/types';
import { checkbox, checkboxInput } from './styles';

export interface CheckboxProps extends FormInput {
    children: string;
}

export const Checkbox = ({
    id,
    optional = false,
    children,
    ...props
}: CheckboxProps) => {
    const textInputId = id || generateSourceId();

    return (
        <div role="group">
            <Label cssOverrides={checkbox} text={children} optional={optional}>
                <Input
                    cssOverrides={checkboxInput}
                    type="checkbox"
                    id={textInputId}
                    optional={optional}
                />
            </Label>
        </div>
    );
};
