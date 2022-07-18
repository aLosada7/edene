import { defaultTheme } from './defaultThemes/defaultTheme';
import { EdeneTheme } from './themeProvider';

const theme = { ...defaultTheme };

const ThemeDecorator = (storyFn: () => any) => {
    return <EdeneTheme theme={theme}>{storyFn()}</EdeneTheme>;
};

export default ThemeDecorator;
