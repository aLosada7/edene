import { Props } from '../../../helpers';
import { option, select, selectItems } from './styles';

type SelectHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    value: string
) => void;

export interface OptionProps extends Props {
    value: string;
    onClick?: SelectHandler;
    children?: React.ReactElement | string;
}

export const Option = ({
    value,
    onClick = () => undefined,
    children,
    ...props
}: OptionProps) => {
    return (
        <li css={option} onClick={(event) => onClick(event, value)}>
            {children}
        </li>
    );
};
