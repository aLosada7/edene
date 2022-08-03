import { headerGlobalBar } from './stylesHeader';

export interface HeaderGlobalBarProps {
    children: React.ReactNode;
}

export const HeaderGlobalBar = ({
    children,
    ...props
}: HeaderGlobalBarProps) => {
    return <div css={headerGlobalBar}>{children}</div>;
};
