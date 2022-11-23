import { Props } from '@edene/foundations';

import { divider } from './styles';

export interface DividerProps extends Props {
    /** Polymorphic */
    as?: 'li';
    width?: string;
    mt?: number;
    mb?: number;
    mh?: number;
}

export const Divider = (props: DividerProps) => {
    const {
        as,
        width = '100%',
        mt = 0,
        mb = 0,
        mh = 0,
        cssOverrides,
        ...rest
    } = {
        ...props,
    };

    const Element = as || 'div';

    return (
        <Element
            role="separator"
            css={[divider(width, mt, mb, mh), cssOverrides]}
            {...rest}
        ></Element>
    );
};
