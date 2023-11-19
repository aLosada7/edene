import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Text } from '../../typography/Text';
import { toastBody } from './styles';

interface ToastBodyProps extends Props {
    children: string;
}

const ToastBody = (props: ToastBodyProps) => {
    const { children, css, ...rest } = props;

    return (
        <Text
            type="regular"
            css={[toastBody, css] as SerializedStyles[]}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default ToastBody;
