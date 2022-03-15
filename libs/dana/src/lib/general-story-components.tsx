import { Col, Row } from '@dana';
import { css } from '@emotion/react';

interface StoryHelperProps {
    children: React.ReactElement[];
}

export const StoryHStack = ({ children }: StoryHelperProps) => (
    <Row>
        <Col sm={24} md={16} lg={16} horizontalStack={2}>
            {children}
        </Col>
    </Row>
);

export const StoryVStack = ({ children }: StoryHelperProps) => (
    <Row>
        <Col verticalStack={2}>{children}</Col>
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
