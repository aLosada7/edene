import { ButtonHTMLAttributes } from 'react';
import { Props, useTheme } from '@edene/foundations';

import { Badge } from '../components/Badge';
import { Icon } from '../icons';
import {
    actionAssistiveText,
    headerGlobalAction,
    headerGlobalActionAriaLabel,
    headerIconBadge,
} from './stylesHeader';

export interface HeaderGlobalActionProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    /**
     * An assistive text to show aria-label value.
     * By default its value is true:
     */
    showAriaLabel?: boolean;
    'aria-label': string;
    badge?: number;
    children: string;
}

export const HeaderGlobalAction = (props: HeaderGlobalActionProps) => {
    const { showAriaLabel = true, badge, children, css, ...rest } = props;
    const theme = useTheme();

    return (
        <button
            css={[
                headerGlobalAction,
                showAriaLabel ? headerGlobalActionAriaLabel : null,
                css,
            ]}
            {...rest}
        >
            {showAriaLabel ? (
                <div css={actionAssistiveText}>{props['aria-label']}</div>
            ) : null}
            {<Icon color={theme.theme.white}>{children}</Icon>}
            {badge ? (
                <Badge css={headerIconBadge}>{badge.toString()}</Badge>
            ) : null}
        </button>
    );
};
