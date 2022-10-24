import { Col, Row } from '@edene/components';
import { css } from '@emotion/react';

interface StoryHelperProps {
    cssOverrides?: any;
    children: React.ReactElement[];
}

export const StoryHStack = ({ children, ...props }: StoryHelperProps) => (
    <Row {...props}>
        <Col sm={24} md={16} lg={16} hStack={2}>
            {children}
        </Col>
    </Row>
);

export const StoryVStack = ({ children, ...props }: StoryHelperProps) => (
    <Row {...props}>
        <Col vStack={2}>{children}</Col>
    </Row>
);

export const StoryGridElement = ({ children }: StoryHelperProps) => (
    <Col
        sm={8}
        md={6}
        lg={4}
        align="center"
        direction="column"
        cssOverrides={css`
            margin-bottom: 1.5rem;
        `}
    >
        {children}
    </Col>
);
