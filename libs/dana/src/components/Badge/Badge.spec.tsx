import { renderWithAct } from '@dana-tests';

import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {
    text: 'test',
};

describe('Badge', () => {
    it('renders children', async () => {
        const { queryAllByText } = await renderWithAct(
            <Badge {...defaultProps} />
        );
        expect(queryAllByText(defaultProps.text)).toHaveLength(1);
    });
});
