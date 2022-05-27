import { inputGroup } from './styles';

export interface FormGroupProps {
    children: React.ReactNode;
}

export const FormGroup = ({ children }: FormGroupProps) => (
    <div role="group" css={inputGroup}>
        {children}
    </div>
);
