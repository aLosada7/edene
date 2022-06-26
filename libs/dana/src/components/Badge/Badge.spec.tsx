import { renderWithAct } from '@dana-tests';
import { DanaTheme } from '@dana-theme';

import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {
    text: 'test',
};

describe('Badge', () => {
    it('renders children', async () => {
        const { queryAllByText } = await renderWithAct(
            <DanaTheme>
                <Badge {...defaultProps} />
            </DanaTheme>
        );
        expect(queryAllByText(defaultProps.text)).toHaveLength(1);
    });
});
