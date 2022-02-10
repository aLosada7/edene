import {
    Children,
    cloneElement,
    ReactElement,
    useRef,
    useState,
    useEffect,
} from 'react';
import { Props } from '../../../helpers';
import { select, selectButton, selectItems, showItems } from './styles';
import { SvgChevronDown } from '../../../foundations/icons';
import { field, input } from '../input/styles';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormInput } from '../input/types';
import { Button, Label } from '../..';

export interface SelectProps extends Props, FormInput {
    value?: string;
    children: ReactElement[];
}

export const Select = ({
    id,
    label: labelText,
    optional = false,
    value: defaultValue,
    children,
    cssOverrides,
    ...props
}: SelectProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const [value, setValue] = useState('');
    const selectValue = useRef<HTMLDivElement | null>(null);

    const inputId = id || generateSourceId();

    useEffect(() => {
        if (defaultValue) {
            Children.map(children, (child) => {
                if (child.props.value === defaultValue)
                    handleOnClick(child, defaultValue);
            });
        }
    }, []);

    const handleOnClick = (child: any, value: string) => {
        selectValue.current = child;
        setValue(value);
        setShowOptions(false);
    };

    const label = labelText ? (
        <Label text={labelText} optional={optional}></Label>
    ) : null;

    return (
        <div role="group" css={field}>
            {label}
            <div css={[input, select, cssOverrides]} id={inputId}>
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
