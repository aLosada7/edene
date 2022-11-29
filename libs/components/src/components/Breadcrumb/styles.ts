import { css } from '@emotion/react';

import { text, transitions } from '@edene/foundations';

export const breadcrumb = css`
    list-style-type: none;
    display: flex;
    flex-flow: wrap;
    padding: 0;
`;

export const breadcrumbItem = ({ active }: any) => css`
    margin-right: 0.5rem;

    * {
        ${text.xsmall({ fontWeight: 'regular', lineHeight: 'regular' })};
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
    -webkit-font-smoothing: antialiased;

    :hover {
        color: #0f62fe;
        transition: ${transitions.short};
        text-decoration: underline;
    }
`;
