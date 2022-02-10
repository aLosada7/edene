import { Row } from '@dana';
import React, {
    ChangeEventHandler,
    Children,
    cloneElement,
    ReactElement,
    useState,
} from 'react';

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
    children,
    onChange,
    ...props
}: RadioGroupProps) => {
    return (
        <Row direction={kind === 'stack' ? 'row' : 'column'}>
            {Children.map(children, (child: any) => {
                return cloneElement(child, {
                    checked: child.props.value === value,
                    onChange: (e: any) => onChange(e.target.value),
                });
            })}
        </Row>
    );
};
