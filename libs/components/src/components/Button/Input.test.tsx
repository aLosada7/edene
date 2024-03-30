import { ThemeProvider } from '@edene/foundations';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('should render correctly', () => {
        const name = 'Button';
        render(
            <ThemeProvider>
                <Button>{name}</Button>
            </ThemeProvider>
        );

        expect(screen.getByRole('button', { name })).toBeVisible();
    });
});
