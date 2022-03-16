import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import './styles.scss';

export const parameters = {
    viewport,
    backgrounds,
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
};
