import React from 'react';
import { css } from '@emotion/react';
import NextImage from 'next/image';
import Link from 'next/link';

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
    Box,
    Stack,
    Group,
} from '@edene/components';

import mountain from '../../../../assets/img/mountain.jpg';

export default {
    title: 'Pages/Results',
};

const FEATURE_MAIN_POST = {
    id: 8,
    headline: 'Creating a component library. The Alert component',
    description:
        'Join me in the new series of blogs which will build a complate reusable components library in React',
    slug: 'creating-a-component-library-the-alert-component',
    tags: ['React'],
    date: 'November 19th 2022',
};
const FEATURE_ADDITIONAL_BLOG_1 = {
    id: 7,
    headline: 'Debugging CSS in Storybook without DevTools',
    description:
        'Three addons that will save you some time when debugging your application',
    slug: 'debugging-css-in-storybook-without-devtools',
    tags: ['React', 'CSS'],
    date: 'September 27th 2022',
};
const FEATURE_ADDITIONAL_BLOG_2 = {
    id: 6,
    headline: 'Efficient list rendering in React using Virtualization',
    description:
        'Virtualize large lists can improve the performance of your application',
    slug: 'efficient-list-rendering-in-react-using-virtualization',
    tags: ['React', 'Performance'],
    date: 'September 22th 2022',
};

const Tags = ({ tags }: any) => {
    return (
        <Group>
            {(tags || []).map((tag: string) => (
                <Box mt={2}>
                    <Badge
                        key={tag}
                        color="gray"
                        css={css`
                            font-weight: 500;
                        `}
                    >
                        {tag}
                    </Badge>
                </Box>
            ))}
        </Group>
    );
};

const FeaturedPost = ({ blog }: any) => (
    <Link href={{ pathname: `/blog/${blog.slug}` }}>
        <Box component="article" mb={4}>
            <Box
                mb={2}
                css={css`
                    position: relative;
                    height: 304px;
                `}
            >
                <Image
                    component={NextImage}
                    layout="fill"
                    src={mountain}
                    alt={blog.slug}
                />
            </Box>
            <Text size="xsmall">{blog.date}</Text>
            <Heading size="h3" mb={1}>
                {blog.headline}
            </Heading>
            <Text size="small">{blog.description}</Text>
            <Tags tags={blog.tags} />
        </Box>
    </Link>
);

const AdditionalFeaturedPost = ({ blog }: any) => (
    <Link href={{ pathname: `/blog/${blog.slug}` }}>
        <Box component="article" mb={4}>
            <Row>
                <Col md={12}>
                    <Box
                        mb={2}
                        css={css`
                            position: relative;
                            width: 100%;
                            height: 194px;
                        `}
                    >
                        <Image
                            component={NextImage}
                            layout="fill"
                            src={mountain}
                            alt={blog.slug}
                        />
                    </Box>
                </Col>
                <Col md={12} direction="column">
                    <Text size="xsmall">{blog.date}</Text>
                    <Heading size="h3" mb={1}>
                        {blog.headline}
                    </Heading>
                    <Text size="small">{blog.description}</Text>
                    <Tags tags={blog.tags} />
                </Col>
            </Row>
        </Box>
    </Link>
);

const Post = ({ blog }: any) => (
    <Link href={{ pathname: `/blog/${blog.slug}` }}>
        <Box component="article" mb={4}>
            <Box
                mb={2}
                css={css`
                    position: relative;
                    height: 194px;
                `}
            >
                <Image
                    component={NextImage}
                    layout="fill"
                    src={mountain}
                    alt="Picture of a mountain"
                />
            </Box>
            <Text size="xsmall">{blog.date}</Text>
            <Heading size="h3" mb={1}>
                {blog.headline}
            </Heading>
            <Text size="small">{blog.description}</Text>
            <Tags tags={blog.tags} />
        </Box>
    </Link>
);

export const Blog = () => (
    <>
        <section className="page-section py-section featured-blog-posts-section">
            <Container ph={12}>
                <Heading size="h2" mb={4}>
                    Featured blog posts
                </Heading>
                <Row>
                    <Col lg={12}>
                        <FeaturedPost blog={FEATURE_MAIN_POST} />
                    </Col>
                    <Col lg={12} direction="column">
                        <AdditionalFeaturedPost
                            blog={FEATURE_ADDITIONAL_BLOG_1}
                        />
                        <AdditionalFeaturedPost
                            blog={FEATURE_ADDITIONAL_BLOG_2}
                        />
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
                    {[
                        FEATURE_MAIN_POST,
                        FEATURE_ADDITIONAL_BLOG_1,
                        FEATURE_ADDITIONAL_BLOG_2,
                    ].map((blog) => (
                        <Col md={12} lg={8} direction="column" key={blog.slug}>
                            <Post blog={blog} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </>
);
