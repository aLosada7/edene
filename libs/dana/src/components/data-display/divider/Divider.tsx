import { divider } from './styles';

export interface DividerProps {
    as?: 'li';
    width?: number;
    mt?: number;
    mb?: number;
    mh?: number;
}

export const Divider = ({
    as,
    mt = 4,
    mb = 0,
    mh = 0,
    width,
    ...props
}: DividerProps) => {
    const Element = as || 'div';

    return (
        <Element css={[divider(mt, mb, mh, width)]} role="separator"></Element>
    );
};
