import { css } from '@emotion/react';
import { textSans } from 'libs/dana/src/foundations/typography/api';

import { from } from '../../../foundations';
import { transitions } from '../../../foundations/animation';

export const breadcrumb = css`
    list-style-type: none;

    ${from.tablet} {
        display: flex;
    }
`;

export const breadcrumbItem = ({ active }: any) => css`
    margin-right: 0.5rem;

    * {
        ${textSans.medium({ fontWeight: 'medium', lineHeight: 'regular' })};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.28572;
        letter-spacing: 0.16px;
    }

    ::after {
        ${active === false &&
        `
      margin-left: .5rem;
      color: #161616;
      content: '/';`}
    }
`;

export const breadcrumbItemLink = () => css`
    text-decoration: none;
    color: #0f62fe;

    :hover {
        color: #0f62fe;
        transition: ${transitions.short};
        text-decoration: underline;
    }
`;
