export type Breakpoint =
    | 'mobile'
    | 'mobileMedium'
    | 'mobileLandscape'
    | 'phablet'
    | 'tablet'
    | 'desktop'
    | 'leftCol'
    | 'wide';

export type BreakpointMap = {
    [key in Breakpoint]: string;
};
