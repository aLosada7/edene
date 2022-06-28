import useThemeContext from '../../../foundations/theme/useThemeContext';
import { ButtonHTMLAttributes, cloneElement } from 'react';
import { Badge } from '../../Badge';
import {
    headerGlobalAction,
    actionAssistiveText,
    headerIconBadge,
    headerGlobalActionAriaLabel,
} from './stylesHeader';

export interface HeaderGlobalActionProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * An assistive text to show aria-label value.
     * By default its value is true:
     */
    showAriaLabel?: boolean;
    'aria-label': string;
    badge?: number;
    children: React.ReactElement;
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
            {cloneElement(children, { size: 'small' })}
            {badge ? (
                <Badge text={badge.toString()} cssOverrides={headerIconBadge} />
            ) : null}
        </button>
    );
};
