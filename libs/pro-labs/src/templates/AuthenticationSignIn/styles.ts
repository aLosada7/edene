import { css, keyframes } from '@emotion/react';

const gradient = keyframes`
  100% {
    background-size: 4000px 1000px;
  }
`;

export const wrapper = css`
    position: relative;
    height: calc(100vh - 48px);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c136 C 57.6%2c155 172.8%2c248.8 288%2c231 C 403.2%2c213.2 460.8%2c48.6 576%2c47 C 691.2%2c45.4 748.8%2c220 864%2c223 C 979.2%2c226 1036.8%2c70.8 1152%2c62 C 1267.2%2c53.2 1382.4%2c155.6 1440%2c179L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c522 C 96%2c489.8 288%2c360.4 480%2c361 C 672%2c361.6 768%2c521.6 960%2c525 C 1152%2c528.4 1344%2c407.4 1440%2c378L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-size: 2000px 1000px;
    background-position: -500px 0;
    animation: ${gradient} 10s infinite alternate linear;
`;

export const login = css`
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 380px;
    padding: 70px 30px 44px;
    border-radius: 22px;
    background: #161616;
    text-align: center;
    color: #fff;
`;

export const profileImage = css`
    width: 120px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const colorWhite = css`
    color: white;
`;
