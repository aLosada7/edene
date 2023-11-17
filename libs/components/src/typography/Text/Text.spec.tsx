import { Text } from './index';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

describe('Text', () => {
    it('should render correctly', async () => {
        const text = 'Text';
        const { container } = render(<Text>{text}</Text>);

        expect(screen.getByText(text)).toBeVisible();

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
