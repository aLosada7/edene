import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';

export const parameters = {
    viewport,
    backgrounds,
    actions: { argTypesRegex: '^on[A-Z].*' },
};
