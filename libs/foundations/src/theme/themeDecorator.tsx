import { defaultTheme } from './defaultTheme';
import { DanaTheme } from './themeProvider';

const theme = { ...defaultTheme };

const ThemeDecorator = (storyFn: () => any) => {
    return <DanaTheme theme={theme}>{storyFn()}</DanaTheme>;
};

export default ThemeDecorator;
