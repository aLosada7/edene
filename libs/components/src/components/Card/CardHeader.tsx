import { ReactElement } from 'react';
import { SerializedStyles } from '@emotion/react';
import { Props } from '@edene/foundations';

import { Heading } from '../../typography/Heading';
import { cardHeader } from './styles';

export interface CardHeaderProps extends Props {
    children: ReactElement | string;
}

export const CardHeader = (props: CardHeaderProps) => {
    const { children, css: cssOverrides, ...rest } = props;

    return (
        <Heading
            size="h2"
            mt={4}
            mb={4}
            css={[cardHeader, cssOverrides] as SerializedStyles[]}
            {...rest}
        >
            {children}
        </Heading>
    );
};
