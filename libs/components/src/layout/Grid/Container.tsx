import { ReactNode } from 'react';

import { Props, Scale } from '@edene/foundations';

import { gridContainer } from './styles';

export interface ContainerProps extends Props {
    /** Each unit is multipled by 0.25 rem */
    pv?: Scale;

    /** Each unit is multipled by 0.25 rem */
    ph?: Scale;

    /** Each unit is multipled by 0.25 rem */
    mt?: Scale;

    children?: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const {
        pv = 0,
        ph = 0,
        mt = 0,
        children,
        css: cssOverrides,
        ...rest
    } = props;

    return (
        <div css={[gridContainer(mt, pv, ph), cssOverrides]} {...rest}>
            {children}
        </div>
    );
};
