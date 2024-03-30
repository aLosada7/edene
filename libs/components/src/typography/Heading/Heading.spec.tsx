import { render, screen } from '@testing-library/react';

import { Heading } from './index';

describe('Heading', () => {
    it('should render correctly', async () => {
        const name = 'Heading';
        render(<Heading type="h1">{name}</Heading>);

        expect(screen.getByRole('heading', { name })).toBeVisible();
    });
});
