import { Breakpoint, breakpoints } from './breakpoints';

export type BreakpointMap = {
  [key in Breakpoint]: string;
};

const minWidth = (from: number): string => `@media (min-width: ${`${from}px`})`;

const maxWidth = (until: number): string =>
  `@media (max-width: ${`${until - 1}px`})`;

// e.g. from.*
export const from: BreakpointMap = {
  mobile: minWidth(breakpoints.mobile),
  mobileMedium: minWidth(breakpoints.mobileMedium),
  mobileLandscape: minWidth(breakpoints.mobileLandscape),
  phablet: minWidth(breakpoints.phablet),
  tablet: minWidth(breakpoints.tablet),
  desktop: minWidth(breakpoints.desktop),
  leftCol: minWidth(breakpoints.leftCol),
  wide: minWidth(breakpoints.wide),
};

// e.g. until.*
export const until: BreakpointMap = {
  mobile: maxWidth(breakpoints.mobile),
  mobileMedium: maxWidth(breakpoints.mobileMedium),
  mobileLandscape: maxWidth(breakpoints.mobileLandscape),
  phablet: maxWidth(breakpoints.phablet),
  tablet: maxWidth(breakpoints.tablet),
  desktop: maxWidth(breakpoints.desktop),
  leftCol: maxWidth(breakpoints.leftCol),
  wide: maxWidth(breakpoints.wide),
};
