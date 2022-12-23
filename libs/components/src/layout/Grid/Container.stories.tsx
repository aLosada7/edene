import { Fragment } from 'react';

import { Container } from './Container';

export default {
    title: 'Layout/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
    },
};

export const Default = () => <Container>Content</Container>;

export const WithoutContainer = () => <Fragment>Content</Fragment>;