import React from 'react';
import { css } from '@emotion/react';

import {
    Container,
    Col,
    Row,
    Image,
    Text,
    Heading,
    Badge,
    SideNav,
    SideNavItems,
    SideNavPrincipal,
    SideNavItem,
} from '@edene/components';
import { until } from '@edene/foundations';

import mountain from '../../../../assets/img/mountain.jpg';

export default {
    title: 'Pages/Results',
};

const noPadding = css`
    padding: 0;
`;

const noMargin = css`
    margin: 0;
`;

const colorBlack = css`
    span {
        color: black;
    }
`;

const BlogAllSection = (
    <Col
        md={12}
        lg={8}
        direction="column"
        css={css`
            margin-bottom: 1.5rem;
        `}
    >
        <article>
            <Image size="d" src={mountain} alt="Picture of a mountain" />
            <Text size="xxsmall" mt={2}>
                01 Jan 2022
            </Text>
            <Heading>My 2021 Annual Review</Heading>
            <Text size="small" mt={2}>
                Allows to obtain more information about different options.
            </Text>
            <Badge
                color="gray"
                css={css`
                    margin-top: 0.5rem;
                `}
            >
                Angular
            </Badge>
        </article>
    </Col>
);

export const Blog = () => (
    <>
        <section className="page-section py-section">
            <Container ph={12}>
                <Heading size="h2" mb={4}>
                    Featured blog posts
                </Heading>
                <Row>
                    <Col
                        lg={12}
                        direction="column"
                        css={css`
                            margin-bottom: 1.5rem;
                        `}
                    >
                        <article>
                            <Image
                                src={mountain}
                                size="d"
                                alt="Picture of a mountain"
                            />
                            <Text size="xxsmall" mt={2}>
                                01 Jan 2022
                            </Text>
                            <Heading size="h3">My 2021 Annual Review</Heading>
                            <Text size="small" mt={2}>
                                Allows to obtain more information about
                                different options.
                            </Text>
                            <Badge
                                color="gray"
                                css={css`
                                    margin-top: 0.5rem;
                                `}
                            >
                                Angular
                            </Badge>
                        </article>
                    </Col>
                    <Col
                        lg={12}
                        direction="column"
                        css={css`
                            margin-bottom: 1.5rem;
                        `}
                    >
                        <article>
                            <Row
                                css={css`
                                    ${until.desktop} {
                                        margin: 0;
                                    }
                                `}
                            >
                                <Col
                                    md={12}
                                    css={css`
                                        padding: 0;
                                    `}
                                >
                                    <Image
                                        src={mountain}
                                        alt="Picture of a mountain"
                                        size="e"
                                        css={css`
                                            margin-bottom: 0.5rem;
                                        `}
                                    />
                                </Col>
                                <Col
                                    md={12}
                                    direction="column"
                                    css={css`
                                        ${until.phablet} {
                                            padding: 0;
                                        }
                                        margin-bottom: 1.5rem;
                                    `}
                                >
                                    <Text size="xxsmall">01 Jan 2022</Text>
                                    <Heading size="h3">
                                        My 2021 Annual Review
                                    </Heading>
                                    <Text size="small" mt={2}>
                                        Allows to obtain more information about
                                        different options.
                                    </Text>
                                    <Badge
                                        color="gray"
                                        css={css`
                                            margin-top: 0.5rem;
                                        `}
                                    >
                                        Angular
                                    </Badge>
                                </Col>
                            </Row>
                        </article>
                        <article>
                            <Row
                                css={css`
                                    ${until.desktop} {
                                        margin: 0;
                                    }
                                `}
                            >
                                <Col
                                    md={12}
                                    css={css`
                                        padding: 0;
                                    `}
                                >
                                    <Image
                                        src={mountain}
                                        alt="Picture of a mountain"
                                        size="e"
                                        css={css`
                                            margin-bottom: 0.5rem;
                                        `}
                                    />
                                </Col>
                                <Col
                                    md={12}
                                    direction="column"
                                    css={css`
                                        ${until.phablet} {
                                            padding: 0;
                                        }
                                    `}
                                >
                                    <Text size="xxsmall">01 Jan 2022</Text>
                                    <Heading size="h3">
                                        My 2021 Annual Review
                                    </Heading>
                                    <Text size="small" mt={2}>
                                        Allows to obtain more information about
                                        different options.
                                    </Text>
                                    <Badge
                                        color="gray"
                                        css={css`
                                            margin-top: 0.5rem;
                                        `}
                                    >
                                        Angular
                                    </Badge>
                                </Col>
                            </Row>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="page-section py-section">
            <Container pv={8} ph={12}>
                <Heading size="h2" mb={4}>
                    All blog posts
                </Heading>
                <Row>
                    <Col md={8} lg={6} css={noPadding}>
                        <SideNav
                            aria-label="Side navigation"
                            mobileWidth="full"
                        >
                            <SideNavItems
                                hideIcon
                                activeColor="rgb(211, 219, 229)"
                                hoverColor="transparent"
                            >
                                <SideNavPrincipal
                                    title="Blog categories"
                                    css={[noMargin, colorBlack]}
                                >
                                    <SideNavItem
                                        href="javascript:void(0)"
                                        badge={<Badge color="gray">3</Badge>}
                                        css={css`
                                            border-radius: 8px;
                                        `}
                                    >
                                        All categories
                                    </SideNavItem>
                                    <SideNavItem
                                        href="javascript:void(0)"
                                        css={css`
                                            border-radius: 8px;
                                            margin-bottom: 0.7rem;
                                        `}
                                    >
                                        Angular
                                    </SideNavItem>
                                </SideNavPrincipal>
                            </SideNavItems>
                        </SideNav>
                    </Col>
                    <Col md={16} lg={18}>
                        <Row>
                            {BlogAllSection}
                            {BlogAllSection}
                            {BlogAllSection}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
);
