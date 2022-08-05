import { createContext } from 'react';

import { FormGroup } from '../../FormGroup';

export interface CheckboxGroupContext {
    value?: (string | number)[];
    onChange?(nextValue: string): void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContext>({});

export interface CheckboxGroupProps {
    value?: (string | number)[];
    onChange?: any;
    children: React.ReactNode;
}

export const CheckboxGroup = ({
    value,
    onChange,
    children,
}: CheckboxGroupProps) => {
    return (
        <CheckboxGroupContext.Provider value={{ value, onChange }}>
            <FormGroup>{children}</FormGroup>
        </CheckboxGroupContext.Provider>
    );
};
