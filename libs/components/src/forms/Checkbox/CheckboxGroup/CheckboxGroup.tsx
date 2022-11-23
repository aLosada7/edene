import { createContext, ReactNode, useState } from 'react';

import { FormGroup } from '../../FormGroup';

export interface CheckboxGroupContext {
    value?: string[];
    onChange?(value: string): void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContext>({});

export interface CheckboxGroupProps {
    defaultValue?: string[];

    /* Value of currently selected checkbox */
    value?: string[];

    /* Called when value changes */
    onChange?: (value: string[]) => void;
    children: ReactNode;
}

export const CheckboxGroup = ({
    defaultValue = [],
    value,
    onChange,
    children,
}: CheckboxGroupProps) => {
    const [checkboxValues, setCheckboxValues] = useState(value || defaultValue);

    const handleChange = (value: string) => {
        const newValue = checkboxValues.includes(value)
            ? checkboxValues.splice(checkboxValues.indexOf(value), 1)
            : [...checkboxValues, value];
        setCheckboxValues(newValue);
        if (onChange) onChange(newValue);
    };

    return (
        <CheckboxGroupContext.Provider
            value={{ value: checkboxValues, onChange: handleChange }}
        >
            <FormGroup>{children}</FormGroup>
        </CheckboxGroupContext.Provider>
    );
};
