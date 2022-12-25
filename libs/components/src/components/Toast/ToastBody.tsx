import { Props } from '@edene/foundations';

import { toastBody } from './styles';
import { Text } from '../../typography/Text';
import { SerializedStyles } from '@emotion/react';

interface ToastBodyProps extends Props {
    children: string;
}

const ToastBody = (props: ToastBodyProps) => {
    const { children, css: cssOverrides, ...rest } = props;

    return (
        <Text css={[toastBody, cssOverrides] as SerializedStyles[]} {...rest}>
            {children}
        </Text>
    );
};

export default ToastBody;
