import { css } from '@emotion/react';

export const spinnerBlocks = css`
  width: 3rem;
  display: flex;
  gap: 0.275rem;
  height: 3rem;

  div {
    background: #64a869;
    width: 0.375rem;
    animation: bounce 1.1s infinite ease-in-out;
  }

  @keyframes bounce {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }

    20% {
      transform: scaleY(1);
    }
  }

  .shape2 {
    animation-delay: -1s;
  }

  .shape3 {
    animation-delay: -0.9s;
  }

  .shape4 {
    animation-delay: -0.8s;
  }

  .shape5 {
    animation-delay: -0.7s;
  }
`;

// *****************************************************************************

export const tableLoader = css`
  color: #64a869;
  height: 5px;
  overflow-x: hidden;
  position: relative;
  width: 100%;

  &:before {
    animation: left-to-right 1s alternate infinite linear;
    background-image: linear-gradient(
      to right,
      transparent,
      #64a869,
      transparent
    );
    position: absolute;
    content: '';
    height: 5px;
    left: 0;
    right: 0;
    top: 0;
  }

  @keyframes left-to-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
