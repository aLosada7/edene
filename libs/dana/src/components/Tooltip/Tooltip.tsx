import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, useState } from 'react';
import { Props } from '../../helpers';
import { menu, menuLine, menuOpen } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps extends Props {}

export const Tooltip = ({ cssOverrides, ...props }: TooltipProps) => {
    return <div>Tooltip</div>;
};
