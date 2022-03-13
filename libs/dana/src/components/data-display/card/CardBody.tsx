import { SerializedStyles } from '@emotion/react';
import { ReactElement } from 'react';
import { cardBody } from './styles';

export interface CardBodyProps {
    children?: ReactElement | ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const CardBody = ({
    children,
    cssOverrides,
    ...props
}: CardBodyProps) => {
    return <div css={[cardBody, cssOverrides]}>{children}</div>;
};
