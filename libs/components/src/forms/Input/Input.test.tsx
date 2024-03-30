import { ThemeProvider } from '@edene/foundations';
import { render, screen } from '@testing-library/react';

import { Label } from '../Label';
import { Input } from './Input';

describe('Input', () => {
    test('should render correctly', () => {
        const name = 'Name';
        render(
            <ThemeProvider>
                <Label text={name} htmlFor="name" />
                <Input type="text" id="name" />
            </ThemeProvider>
        );

        expect(screen.getByRole('textbox', { name })).toBeVisible();
    });
});
