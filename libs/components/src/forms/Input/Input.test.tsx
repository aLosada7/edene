import { render, screen } from '@testing-library/react';

import { Label } from '../Label';
import { Input } from './Input';

describe('Input', () => {
    test('should render correctly', () => {
        const name = 'Name';
        render(
            <>
                <Label text={name} htmlFor="name" />
                <Input type="text" id="name" />
            </>
        );

        expect(screen.getByRole('textbox', { name })).toBeVisible();
    });
});
