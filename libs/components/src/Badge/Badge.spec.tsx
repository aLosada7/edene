import React from 'react';

import { renderWithAct } from '@dana/utils';
import { EdeneTheme } from '@edene/foundations';

import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps = {
    text: 'test',
};

describe('Badge', () => {
    it('renders children', async () => {
        const { queryAllByText } = await renderWithAct(
            <EdeneTheme>
                <Badge {...defaultProps} />
            </EdeneTheme>
        );
        expect(queryAllByText(defaultProps.text)).toHaveLength(1);
    });
});
