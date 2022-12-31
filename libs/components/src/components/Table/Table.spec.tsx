import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Default as Table } from './Table.stories';

describe('Table', () => {
    it('should render the table', () => {
        render(<Table />);

        expect(screen.getByText('Name')).toBeVisible();
    });

    it('should render the table with selection', () => {
        render(<Table selection />);

        expect(screen.getAllByRole('checkbox')).not.toBe(0);
    });

    it('should not have basic accesibility issues', async () => {
        const { container } = render(<Table />);

        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
