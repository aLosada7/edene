import { css } from '@emotion/react';
import { transitions } from '../../core/animation';

import { from } from '../../core/mq';

export const breadcrumb = css`
  list-style-type: none;

  ${from.tablet} {
    display: flex;
  }
`;

export const breadcrumbItem = ({ active }: any) => css`
  margin-right: 0.5rem;

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

  :hover {
    color: #0f62fe;
    transition: ${transitions.short};
    text-decoration: underline;
  }
`;
