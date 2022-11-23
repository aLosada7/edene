import { ButtonHTMLAttributes } from 'react';

import { useThemeContext } from '@edene/foundations';

import { Badge } from '../components/Badge';
import {
    headerGlobalAction,
    actionAssistiveText,
    headerIconBadge,
    headerGlobalActionAriaLabel,
} from './stylesHeader';
import { Icon } from '../icons';

export interface HeaderGlobalActionProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * An assistive text to show aria-label value.
     * By default its value is true:
     */
    showAriaLabel?: boolean;
    'aria-label': string;
    badge?: number;
    children: string;
}

export const HeaderGlobalAction = ({
    showAriaLabel = true,
    badge,
    children,
    ...props
}: HeaderGlobalActionProps) => {
    const theme = useThemeContext();
    return (
        <button
            css={[
                headerGlobalAction(theme),
                showAriaLabel ? headerGlobalActionAriaLabel : null,
            ]}
            {...props}
        >
            {showAriaLabel ? (
                <div css={actionAssistiveText}>{props['aria-label']}</div>
            ) : null}
            {<Icon color={theme.theme.white}>{children}</Icon>}
            {badge ? (
                <Badge cssOverrides={headerIconBadge}>{badge.toString()}</Badge>
            ) : null}
        </button>
    );
};
