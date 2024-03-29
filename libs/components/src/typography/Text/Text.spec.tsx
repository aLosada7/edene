import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Text } from './index';

describe('Text', () => {
    it('should render correctly', async () => {
        const text = 'Text';
        const { container } = render(<Text type="regular">{text}</Text>);

        expect(screen.getByText(text)).toBeVisible();

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
