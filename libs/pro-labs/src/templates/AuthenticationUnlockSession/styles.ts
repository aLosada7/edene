import { from } from '@edene/foundations';
import { css, keyframes } from '@emotion/react';

const rotate = keyframes`
  100% {
    background-position: 15% 50%;
  }
`;

export const wrapper = css`
    height: calc(100vh - 48px);
    background-image: radial-gradient(
            at 88% 0%,
            hsla(327, 67%, 64%, 1) 0px,
            transparent 50%
        ),
        radial-gradient(at 63% 46%, hsla(307, 76%, 61%, 1) 0px, transparent 50%),
        radial-gradient(at 95% 53%, hsla(89, 91%, 67%, 1) 0px, transparent 50%),
        radial-gradient(at 79% 83%, hsla(170, 86%, 65%, 1) 0px, transparent 50%),
        radial-gradient(at 74% 93%, hsla(71, 93%, 75%, 1) 0px, transparent 50%),
        radial-gradient(at 52% 13%, hsla(110, 83%, 72%, 1) 0px, transparent 50%),
        radial-gradient(at 30% 80%, hsla(263, 79%, 66%, 1) 0px, transparent 50%);
    color: #000;
    animation: ${rotate} 6s infinite alternate linear;
`;

export const login = css`
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 70px 30px 44px;
    border-radius: 1.25rem;
    background: #ffffff;
    text-align: center;
    width: 380px;

    ${from.phablet} {
        top: 0;
        right: 0;
        left: auto;
        translate: 0 0;
        margin: 0;
        height: 100%;
        border-radius: 0;
        padding-top: 240px;
    }
`;

export const profileImage = css`
    width: 120px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const loginForm = css`
    display: grid;
    gap: 30px;
    place-items: center;
    width: 100%;
    margin: 0;

    > a {
        color: #8d4fff;
        font-size: 1rem;
        text-align: left;
        text-decoration: none;
    }
`;
