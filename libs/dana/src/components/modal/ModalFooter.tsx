import { ReactElement } from 'react';
import { ButtonGroup } from '@dana-components';
import { css, SerializedStyles } from '@emotion/react';

import { modalFooter } from './styles';
export interface ModalFooterProps {
    children: ReactElement | ReactElement[];
    cssOverrides?: SerializedStyles;
}

export const ModalFooter = ({
    children,
    cssOverrides = css``,
}: ModalFooterProps) => {
    return (
        <ButtonGroup
            as="footer"
            size="small"
            cssOverrides={[modalFooter, cssOverrides]}
        >
            {children}
        </ButtonGroup>
    );
};
