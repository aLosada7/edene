import { Props } from '@edene/foundations';
import { tooltip } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps extends Props {}

export const Tooltip = ({ cssOverrides }: TooltipProps) => {
    return <div css={[tooltip, cssOverrides]}>Tooltip</div>;
};
