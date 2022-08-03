import { toastBody } from './styles';
import { Text } from '../Text';

interface ToastBodyProps {
    children: string;
}

const ToastBody = ({ children }: ToastBodyProps) => {
    return <Text cssOverrides={toastBody}>{children}</Text>;
};

export default ToastBody;
