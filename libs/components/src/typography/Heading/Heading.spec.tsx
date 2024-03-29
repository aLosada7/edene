import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Heading } from './index';

describe('Heading', () => {
    it('should render correctly', async () => {
        const text = 'Heading';
        const { container } = render(<Heading type="h1">{text}</Heading>);

        expect(screen.getByText(text)).toBeVisible();

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
