import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Badge } from './Badge';

const content = 7;

describe('Badge', () => {
    it('should render children content', () => {
        render(<Badge>{content}</Badge>);
        expect(screen.getByText(content)).toBeVisible();
    });

    it('should not have basic accesibility issues', async () => {
        const { container } = render(<Badge>{content}</Badge>);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
