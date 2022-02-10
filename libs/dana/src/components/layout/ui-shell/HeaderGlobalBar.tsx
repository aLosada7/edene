import { headerGlobalBar } from './stylesHeader';

export interface HeaderGlobalBarProps {
    children: React.ReactElement | React.ReactElement[];
}

export const HeaderGlobalBar = ({
    children,
    ...props
}: HeaderGlobalBarProps) => {
    return <div css={headerGlobalBar}>{children}</div>;
};
