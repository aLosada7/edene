import { layoutElement } from '@utils/storybook';

import { Box } from '../Box';
import { Container } from './Container';

export default {
    title: 'Layout/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
    },
};

const StoryComponent = () => <Box css={layoutElement}>Content</Box>;

export const Default = () => (
    <Container>
        <StoryComponent />
    </Container>
);

export const WithoutContainer = () => <StoryComponent />;
