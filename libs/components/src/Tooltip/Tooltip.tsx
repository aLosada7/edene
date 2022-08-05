import { Props } from '@edene/foundations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps extends Props {}

export const Tooltip = ({ cssOverrides }: TooltipProps) => {
    return <div css={cssOverrides}>Tooltip</div>;
};
