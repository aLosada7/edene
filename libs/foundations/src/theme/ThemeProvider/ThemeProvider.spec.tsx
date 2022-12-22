import {
    render,
    waitFor,
    screen,
    renderHook,
    act,
} from '@testing-library/react';
import { defaultTheme, tealTheme } from '../defaultThemes';
import ThemeProvider, { useTheme } from './ThemeProvider';

const TestingComponent = () => {
    const { theme } = useTheme();

    return <div>{theme.title}</div>;
};

describe('ThemeProvider', () => {
    it('should render children properly', async () => {
        render(
            <ThemeProvider>
                <TestingComponent />
            </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.queryByText(defaultTheme.title));
        });
    });
});

describe('useTheme', () => {
    it('should return default as theme title', async () => {
        const { result } = renderHook(useTheme, {
            wrapper: ThemeProvider,
        });

        await waitFor(() => {
            expect(result.current.theme.title).toBe(defaultTheme.title);
        });
    });

    it('should return teal theme title after changing the theme', async () => {
        const { result } = renderHook(useTheme, {
            wrapper: ThemeProvider,
        });

        act(() => {
            result.current.setTheme(tealTheme);
        });

        await waitFor(() => {
            expect(result.current.theme.title).toBe(tealTheme.title);
        });
    });
});
