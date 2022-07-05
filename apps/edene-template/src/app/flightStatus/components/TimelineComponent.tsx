import { css } from '@emotion/react';

const timelineLine = css`
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: rgb(203, 213, 225);
    left: 1.25rem;
`;

export const TimelineComponent = () => <div css={timelineLine}></div>;
