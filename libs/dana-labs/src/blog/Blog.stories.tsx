import React from 'react';
import {
    Container,
    Col,
    Row,
    Image,
    Text,
    Badge,
    SideNav,
    SideNavItems,
    SideNavPrincipal,
    SideNavItem,
} from '@dana';
import mountain from '../../assets/img/mountain.jpg';
import { css } from '@emotion/react';

export default {
    title: 'DanaLabs/Blog',
};

const BlogAllSection = (
    <Col
        md={12}
        lg={8}
        direction="column"
        cssOverrides={css`
            margin-bottom: 1.5rem;
        `}
    >
        <article>
            <Image src={mountain} alt="Picture of a mountain" />
            <Text size="xxsm" mt={2}>
                01 Jan 2022
            </Text>
            <Text size="h5">My 2021 Annual Review</Text>
            <Text size="sm" mt={2}>
                Allows to obtain more information about different options.
            </Text>
            <Badge
                color="gray"
                text="Angular"
                cssOverrides={css`
                    margin-top: 0.5rem;
                `}
            />
        </article>
    </Col>
);

export const Blog = () => (
    <>
        <section className="page-section py-section">
            <Container ph={16}>
                <Text size="h4">Featured blog posts</Text>
                <Row>
                    <Col
                        lg={12}
                        direction="column"
                        cssOverrides={css`
                            margin-bottom: 1.5rem;
                        `}
                    >
                        <article>
                            <Image
                                src={mountain}
                                size="d"
                                alt="Picture of a mountain"
                            />
                            <Text size="xxsm" mt={2}>
                                01 Jan 2022
                            </Text>
                            <Text size="h3">My 2021 Annual Review</Text>
                            <Text size="sm" mt={2}>
                                Allows to obtain more information about
                                different options.
                            </Text>
                            <Badge
                                color="gray"
                                text="Angular"
                                cssOverrides={css`
                                    margin-top: 0.5rem;
                                `}
                            />
                        </article>
                    </Col>
                    <Col
                        lg={12}
                        direction="column"
                        cssOverrides={css`
                            margin-bottom: 1.5rem;
                        `}
                    >
                        <article>
                            <Row>
                                <Col md={12} noPadding>
                                    <Image
                                        src={mountain}
                                        alt="Picture of a mountain"
                                        size="e"
                                        cssOverrides={css`
                                            margin-bottom: 0.5rem;
                                        `}
                                    />
                                </Col>
                                <Col
                                    md={12}
                                    direction="column"
                                    cssOverrides={css`
                                        margin-bottom: 1.5rem;
                                    `}
                                >
                                    <Text size="xxsm">01 Jan 2022</Text>
                                    <Text size="h5">My 2021 Annual Review</Text>
                                    <Text size="sm" mt={2}>
                                        Allows to obtain more information about
                                        different options.
                                    </Text>
                                    <Badge
                                        color="gray"
                                        text="Angular"
                                        cssOverrides={css`
                                            margin-top: 0.5rem;
                                        `}
                                    />
                                </Col>
                            </Row>
                        </article>
                        <article>
                            <Row>
                                <Col md={12} noPadding>
                                    <Image
                                        src={mountain}
                                        alt="Picture of a mountain"
                                        size="e"
                                        cssOverrides={css`
                                            margin-bottom: 0.5rem;
                                        `}
                                    />
                                </Col>
                                <Col md={12} direction="column">
                                    <Text size="xxsm">01 Jan 2022</Text>
                                    <Text size="h5">My 2021 Annual Review</Text>
                                    <Text size="sm" mt={2}>
                                        Allows to obtain more information about
                                        different options.
                                    </Text>
                                    <Badge
                                        color="gray"
                                        text="Angular"
                                        cssOverrides={css`
                                            margin-top: 0.5rem;
                                        `}
                                    />
                                </Col>
                            </Row>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="page-section py-section">
            <Container pv={8} ph={16}>
                <Text size="h4">All blog posts</Text>
                <Row>
                    <Col md={6}>
                        <SideNav aria-label="Side navigation">
                            <SideNavItems
                                hideIcon
                                activeColor="rgb(211, 219, 229)"
                                hoverColor="transparent"
                            >
                                <SideNavPrincipal title="Blog categories">
                                    <SideNavItem
                                        href="javascript:void(0)"
                                        isActive
                                        badge={<Badge color="gray" text="3" />}
                                        cssOverrides={css`
                                            border-radius: 8px;
                                        `}
                                    >
                                        All categories
                                    </SideNavItem>
                                    <SideNavItem
                                        href="javascript:void(0)"
                                        cssOverrides={css`
                                            border-radius: 8px;
                                        `}
                                    >
                                        Angular
                                    </SideNavItem>
                                </SideNavPrincipal>
                            </SideNavItems>
                        </SideNav>
                    </Col>
                    <Col md={18}>
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
