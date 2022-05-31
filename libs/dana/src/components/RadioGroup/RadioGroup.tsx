import { Row } from '@dana';
import React, { createContext, ReactElement } from 'react';
import { radioGroup } from './styles';

export interface RadioGroupContext {
    value?: string | number;
    onChange?(nextValue: string): void;
}

export const RadioGroupContext = createContext<RadioGroupContext>({});

export interface RadioGroupProps {
    /**
     * Row (stack) or column (wrap) alignment
     */
    kind?: 'stack' | 'wrap';
    value?: string;
    onChange?: any;
    children: ReactElement[];
}

export const RadioGroup = ({
    kind = 'stack',
    value,
    onChange,
    children,
}: RadioGroupProps) => {
    return (
        <RadioGroupContext.Provider value={{ value, onChange }}>
            <Row
                direction={kind === 'stack' ? 'row' : 'column'}
                cssOverrides={radioGroup}
            >
                {children}
            </Row>
        </RadioGroupContext.Provider>
    );
};
