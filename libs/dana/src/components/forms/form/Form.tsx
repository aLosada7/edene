import { FormHTMLAttributes, ReactNode } from 'react';
import { Props } from '../../../helpers';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement>, Props {
    children?: React.ReactElement | React.ReactElement[];
}

export const Form = ({ children, ...props }: FormProps) => {
    return <form>{children}</form>;
};
