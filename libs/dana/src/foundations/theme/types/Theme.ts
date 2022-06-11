import { Palette } from './Palette';

export interface Theme {
    name: string;
    palette: Palette;
    header?: any;
    label?: any;
    sideNav?: any;
    text: string;
    title: any;
}
