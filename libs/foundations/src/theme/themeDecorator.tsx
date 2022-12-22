import { defaultTheme } from './defaultThemes/defaultTheme';
import ThemeProvider from './ThemeProvider/ThemeProvider';

const theme = { ...defaultTheme };

const ThemeDecorator = (storyFn: () => any) => {
    return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
};

export default ThemeDecorator;
