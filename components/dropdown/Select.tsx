import { Children, cloneElement, ReactElement, useRef, useState } from 'react';
import { Props } from '../../../helpers';
import { select, selectButton, selectItems, showItems } from './styles';
import { SvgChevronDown } from '../../../foundations/icons';
import { field, input } from '../input/styles';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormInput } from '../input/types';
import { Button, Label } from '../..';

export interface SelectProps extends Props, FormInput {
    children: ReactElement[];
}

export const Select = ({
    id,
    label: labelText,
    optional = false,
    children,
    ...props
}: SelectProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const [value, setValue] = useState('');
    const selectValue = useRef<HTMLDivElement | null>(null);

    const inputId = id || generateSourceId();

    const handleOnClick = (child: any, value: string) => {
        selectValue.current = child;
        setValue(value);
        setShowOptions(false);
    };

    return (
        <div role="group" css={field}>
            <Label text={labelText} optional={optional}></Label>
            <div css={[input, select]} id={inputId}>
                <Button
                    cssOverrides={selectButton}
                    rightIcon={<SvgChevronDown size="medium" />}
                    onClick={() => setShowOptions(!showOptions)}
                >
                    <div>{selectValue.current}</div>
                </Button>
                <ul css={[selectItems, showOptions ? showItems : null]}>
                    {Children.map(children, (child) => {
                        return cloneElement(child, {
                            onClick: (event: any, value: string) =>
                                handleOnClick(child, value),
                        });
                    })}
                </ul>
            </div>
        </div>
    );
};
