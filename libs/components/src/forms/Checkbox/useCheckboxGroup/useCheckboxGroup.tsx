import React from 'react';
import { useContext } from 'react';
import { CheckboxGroupContext } from '../CheckboxGroup';

export const useCheckboxGroup = () => {
    const { onChange: onChangeProp, value = [] } =
        useContext(CheckboxGroupContext);

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeProp?.(event.target.value);
        },
        [onChangeProp]
    );

    return { onChange, value, isGroup: true };
};
