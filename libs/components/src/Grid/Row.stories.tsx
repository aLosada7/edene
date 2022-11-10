import { Fragment } from 'react';
import { css } from '@emotion/react';
import { Story } from '@storybook/react';

import { grays } from '@edene/foundations';

import { Row, RowProps } from './index';
import { Col } from './Col';

export default {
    title: 'Layout/Row',
    component: Row,
};

const col = css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: rgba(86, 61, 124, 0.15);
    border: 1px solid rgba(86, 61, 124, 0.2);
`;

export const Playground: Story<RowProps> = (args: RowProps) => {
    return (
        <Row
            {...args}
            cssOverrides={css`
                width: 50vw;
                height: 30vw;
                border: 4px solid ${grays[4]};
                gap: 1rem;
            `}
        >
            <div css={{ padding: '1rem', backgroundColor: grays[5] }}>
                Element 1
            </div>
            <div css={{ padding: '1rem', backgroundColor: grays[5] }}>
                Element 2
            </div>
        </Row>
    );
};
Playground.storyName = '🧶 Playground';
Playground.args = { direction: 'row', align: 'start-start' };

export const WithThreeCols = () => (
    <Row>
        <Col cssOverrides={col} sm={24} lg={8}>
            One of three columns
        </Col>
        <Col cssOverrides={col} sm={24} lg={8}>
            One of three columns
        </Col>
        <Col cssOverrides={col} sm={24} lg={8}>
            One of three columns
        </Col>
    </Row>
);

export const WithTwoAndThreeCols = () => (
    <Fragment>
        <Row>
            <Col cssOverrides={col} md={12}>
                One of two columns
            </Col>
            <Col cssOverrides={col} md={12}>
                One of two columns
            </Col>
        </Row>
        <Row>
            <Col cssOverrides={col} lg={8}>
                One of three columns
            </Col>
            <Col cssOverrides={col} lg={8}>
                One of three columns
            </Col>
            <Col cssOverrides={col} lg={8}>
                One of three columns
            </Col>
        </Row>
    </Fragment>
);

export const WithFourCols = () => (
    <Row>
        <Col cssOverrides={col} lg={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} lg={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} lg={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} lg={12}>
            One of two columns
        </Col>
    </Row>
);

export const WithRowsAndColumns = () => (
    <Row>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col md={12} direction="column">
            <Fragment>
                <Row>
                    <Col cssOverrides={col} md={12}>
                        One of two columns
                    </Col>
                    <Col cssOverrides={col} md={12}>
                        One of two columns
                    </Col>
                </Row>
                <Row>
                    <Col cssOverrides={col} md={12}>
                        One of two columns
                    </Col>
                    <Col cssOverrides={col} md={12}>
                        One of two columns
                    </Col>
                </Row>
            </Fragment>
        </Col>
    </Row>
);

export const WithFourColsWithoutContainer = () => (
    <Row>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
    </Row>
);
