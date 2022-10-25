import { createContext, ReactNode, useState } from 'react';

import { Row } from '../Grid';
import { radioGroup } from './styles';

export interface RadioGroupContext {
    defaultValue?: string;

    value?: string;

    onChange?(nextValue: string): void;
}

export const RadioGroupContext = createContext<RadioGroupContext>({});

export interface RadioGroupProps {
    /** Radio Group items direction. */
    inline?: boolean;

    /** Controlled input selectValue */
    value?: string;

    /** Uncontrolled input defaultValue */
    defaultValue?: string;

    /** Controlled input onChange handler */
    onChange?: (value: string) => void;

    children: ReactNode;
}

export const RadioGroup = (props: RadioGroupProps) => {
    const { inline, value, defaultValue, onChange, children } = props;

    const [radioValue, setRadioValue] = useState(value || defaultValue);

    const handleOnChange = (radioValue: string) => {
        setRadioValue(radioValue);
        if (onChange) onChange(radioValue);
    };

    return (
        <RadioGroupContext.Provider
            value={{ value: radioValue, onChange: handleOnChange }}
        >
            <Row
                direction={inline ? 'row' : 'column'}
                cssOverrides={radioGroup(inline)}
            >
                {children}
            </Row>
        </RadioGroupContext.Provider>
    );
};
