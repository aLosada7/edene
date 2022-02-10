import { border } from './palette';

export const visuallyHidden = `
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
	top: 0;
	left: 0;
`;

export const focusHalo = `
  outline: 2px solid ${border.focusHalo};
  outline-offset: -2px;
`;

export const disabled = `
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
`;

export const descriptionId = (id: string): string => `${id}_description`;

let sourceIdIndex = 0;

export const generateSourceId = (): string => `component-${sourceIdIndex++}`;
