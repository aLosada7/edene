import { FormHTMLAttributes } from 'react';

import { Props } from '@edene/foundations';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement>, Props {
    children?: React.ReactElement | React.ReactElement[];
}

export const Form = ({ children, ...props }: FormProps) => {
    return <form {...props}>{children}</form>;
};
