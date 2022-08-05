import { border, text } from './palette';

// breakpoints
export type { Breakpoint } from './breakpoints';
export { breakpoints } from './breakpoints';

// mq

export { from, until } from './mq';

// palette
export * from './palette';

export const palette = {
    // functional colours (default)
    border,
    text,
};

export * from './colors';
export * from './commonStyles';
export * from './typography';
export * from './accesibility';
export * from './shadows';
export * from './animation';
export * from './icons';
