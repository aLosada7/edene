import { renderWithAct } from '@utils';
import { EdeneTheme } from '@edene/foundations';

import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {
    children: 7,
};

describe('Badge', () => {
    it('renders children', async () => {
        const { getAllByText } = await renderWithAct(
            <EdeneTheme>
                <Badge {...defaultProps} />
            </EdeneTheme>
        );
        if (defaultProps.children)
            expect(getAllByText(defaultProps.children.toString())).toHaveLength(
                1
            );
    });
});
