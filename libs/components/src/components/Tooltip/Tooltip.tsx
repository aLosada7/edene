import { Props } from '@edene/foundations';

import { tooltip } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps extends Props {}

export const Tooltip = (props: TooltipProps) => {
    const { css, ...rest } = props;

    return (
        <div css={[tooltip, css]} {...rest}>
            Tooltip
        </div>
    );
};
