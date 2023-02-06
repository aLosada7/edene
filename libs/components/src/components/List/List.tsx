import { list } from './styles';
import { ListProps } from './types';

export const List = (props: ListProps) => {
    const {
        styleType = 'none',
        withSeparation = false,
        children,
        ...rest
    } = props;
    return (
        <ul css={list(styleType, withSeparation)} {...rest}>
            {children}
        </ul>
    );
};
