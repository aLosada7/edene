import React, { useContext } from 'react';

import { RadioGroupContext } from '../RadioGroup';

export const useRadioGroup = () => {
    const { value, onChange: onChangeProp } = useContext(RadioGroupContext);

    const onChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const nextValue = event.target.value;

            onChangeProp?.(nextValue);
        },
        [onChangeProp]
    );

    return { value, onChange };
};
