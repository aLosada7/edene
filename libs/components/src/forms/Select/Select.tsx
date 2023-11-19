import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react';
import { generateSourceId,Props } from '@edene/foundations';

import { Button } from '../../components/Button';
import { FormGroup } from '../FormGroup';
import { input } from '../Input/styles';
import { FormInput } from '../Input/types';
import { Label } from '../Label';
import { select, selectButton, selectItems, showItems } from './styles';

export interface SelectProps extends Props, FormInput {
    /** Controlled input selectValue */
    value?: string;

    /** Uncontrolled input defaultValue */
    defaultValue?: string;

    /** Controlled input onChange handler */
    onChange?: (selectValue: string) => void;

    children: ReactElement | ReactElement[];
}

export const Select = (props: SelectProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    const selectValueRef = useRef<HTMLDivElement | null>(null);

    const {
        id,
        label: labelText,
        value,
        defaultValue,
        onChange,
        children,
        css,
    } = props;

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

    const label = labelText ? <Label text={labelText} /> : null;

    return (
        <FormGroup>
            {label}
            <div css={[input, select, css]} id={inputId}>
                <Button
                    as="div"
                    icon="unfold_more"
                    iconSide="right"
                    css={selectButton}
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
