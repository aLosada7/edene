import {
    Children,
    cloneElement,
    ReactElement,
    useRef,
    useState,
    useEffect,
} from 'react';

import { Props, generateSourceId } from '@edene/foundations';

import {
    select,
    selectButton,
    selectButtonIconRight,
    selectItems,
    showItems,
} from './styles';
import { input } from '../Input/styles';
import { FormInput } from '../Input/types';
import { Button } from '../Button';
import { Label } from '../Label';
import { FormGroup } from '../FormGroup';

export interface SelectProps extends Props, FormInput {
    /** Controlled input selectValue */
    value?: string;

    /** Uncontrolled input defaultValue */
    defaultValue?: string;

    /** Controlled input onChange handler */
    onChange?: (selectValue: string) => void;

    children: ReactElement | ReactElement[];
}

export const Select = ({
    id,
    label: labelText,
    optional = false,
    value,
    defaultValue,
    onChange,
    children,
    cssOverrides,
}: SelectProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    const selectValueRef = useRef<HTMLDivElement | null>(null);

    const inputId = id || generateSourceId();

    useEffect(() => {
        const v = value || defaultValue;
        if (v) {
            Children.map(children, (child) => {
                if (child.props.value === v) handleOnClick(child, v);
            });
        }
    }, []);

    const handleOnClick = (child: any, selectValue: string) => {
        selectValueRef.current = child;
        if (onChange) onChange(selectValue);
        setSelectValue(selectValue);
        setShowOptions(false);
    };

    const label = labelText ? (
        <Label text={labelText} optional={optional}></Label>
    ) : null;

    return (
        <FormGroup>
            {label}
            <div css={[input, select, cssOverrides]} id={inputId}>
                <Button
                    component="div"
                    cssOverrides={selectButton}
                    iconRight="unfold_more"
                    cssOverridesIconRightButton={selectButtonIconRight}
                    onClick={(e: any) => {
                        e.preventDefault();
                        setShowOptions(!showOptions);
                    }}
                >
                    {selectValue}
                </Button>
                <ul css={[selectItems, showOptions ? showItems : null]}>
                    {Children.map(children, (child) => {
                        return cloneElement(child, {
                            onClick: (event: any, selectValue: string) =>
                                handleOnClick(child, selectValue),
                        });
                    })}
                </ul>
            </div>
        </FormGroup>
    );
};
