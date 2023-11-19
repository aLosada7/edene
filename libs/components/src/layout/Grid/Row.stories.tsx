import { Fragment } from 'react';
import { grays } from '@edene/foundations';
import { css } from '@emotion/react';
import { Story } from '@storybook/react';
import { layoutElement } from '@utils/storybook';

import { Box } from '../Box';
import { Col } from './Col';
import { Row, RowProps } from './index';

export default {
    title: 'Layout/Row',
    component: Row,
};

export const Playground: Story<RowProps> = (args: RowProps) => {
    return (
        <Row
            {...args}
            css={css`
                width: 50vw;
                height: 30vw;
                border: 4px solid ${grays[4]};
                gap: 1rem;
            `}
        >
            <Box css={layoutElement}>Element 1</Box>
            <Box css={layoutElement}>Element 2</Box>
        </Row>
    );
};
Playground.storyName = '🧶 Playground';
Playground.args = { direction: 'row', align: 'start-start' };

export const WithThreeCols = () => (
    <Row>
        <Col css={layoutElement} sm={24} lg={8}>
            One of three columns
        </Col>
        <Col css={layoutElement} sm={24} lg={8}>
            One of three columns
        </Col>
        <Col css={layoutElement} sm={24} lg={8}>
            One of three columns
        </Col>
    </Row>
);

export const WithTwoAndThreeCols = () => (
    <Fragment>
        <Row>
            <Col css={layoutElement} md={12}>
                One of two columns
            </Col>
            <Col css={layoutElement} md={12}>
                One of two columns
            </Col>
        </Row>
        <Row>
            <Col css={layoutElement} lg={8}>
                One of three columns
            </Col>
            <Col css={layoutElement} lg={8}>
                One of three columns
            </Col>
            <Col css={layoutElement} lg={8}>
                One of three columns
            </Col>
        </Row>
    </Fragment>
);

export const WithFourCols = () => (
    <Row>
        <Col css={layoutElement} lg={12}>
            One of two columns
        </Col>
        <Col css={layoutElement} lg={12}>
            One of two columns
        </Col>
        <Col css={layoutElement} lg={12}>
            One of two columns
        </Col>
        <Col css={layoutElement} lg={12}>
            One of two columns
        </Col>
    </Row>
);

export const WithRowsAndColumns = () => (
    <Row>
        <Col css={layoutElement} md={12}>
            One of two columns
        </Col>
        <Col md={12} direction="column">
            <Fragment>
                <Row>
                    <Col css={layoutElement} md={12}>
                        One of two columns
                    </Col>
                    <Col css={layoutElement} md={12}>
                        One of two columns
                    </Col>
                </Row>
                <Row>
                    <Col css={layoutElement} md={12}>
                        One of two columns
                    </Col>
                    <Col css={layoutElement} md={12}>
                        One of two columns
                    </Col>
                </Row>
            </Fragment>
        </Col>
    </Row>
);

export const WithFourColsWithoutContainer = () => (
    <Row>
        <Col css={layoutElement} md={12}>
            One of two columns
        </Col>
        <Col css={layoutElement} md={12}>
            One of two columns
        </Col>
        <Col css={layoutElement} md={12}>
            One of two columns
        </Col>
        <Col css={layoutElement} md={12}>
            One of two columns
        </Col>
    </Row>
);
