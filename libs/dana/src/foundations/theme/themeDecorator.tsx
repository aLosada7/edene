import { defaultTheme } from './defaultTheme';
import { ThemeProvider } from './themeProvider';

const theme = { ...defaultTheme };

const ThemeDecorator = (storyFn: () => any) => {
    return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
};

export default ThemeDecorator;
