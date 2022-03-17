import { divider } from './styles';

export interface DividerProps {
    as?: 'li';
    width?: number;
}

export const Divider = ({ as, width, ...props }: DividerProps) => {
    const Element = as || 'div';

    return <Element css={[divider(width)]} role="separator"></Element>;
};
