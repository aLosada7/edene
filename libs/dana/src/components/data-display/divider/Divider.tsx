import { divider } from './styles';

export interface DividerProps {
    width?: number;
}

export const Divider = ({ width, ...props }: DividerProps) => {
    return <div css={divider(width)}></div>;
};
