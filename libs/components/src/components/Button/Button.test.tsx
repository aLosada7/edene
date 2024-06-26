import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    test('should render correctly', () => {
        const name = 'Button';
        render(<Button>{name}</Button>);

        expect(screen.getByRole('button', { name })).toBeVisible();
    });
});
