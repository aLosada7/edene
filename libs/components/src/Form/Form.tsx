import { FormHTMLAttributes } from 'react';

import { Props } from '@edene/foundations';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement>, Props {
    children?: React.ReactElement | React.ReactElement[];
}

export const Form = ({ children }: FormProps) => {
    return <form>{children}</form>;
};
