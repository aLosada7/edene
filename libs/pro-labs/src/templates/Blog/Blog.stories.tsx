import React from 'react';
import { Link } from '@edene/components';
import {
    Badge,
    Box,
    Col,
    Container,
    Heading,
    Image,
    Row,
    Text,
} from '@edene/components';
import { css } from '@emotion/react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import mountain from '../../../assets/img/mountain.jpg';

export default {
    title: 'Templates',
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

const Tags = ({ tags = [] }: any) => {
    return (
        <Row gap={1}>
            {tags.map((tag: string) => (
                <Box key={tag} mt={2}>
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
        </Row>
    );
};

const FeaturedPost = ({ blog }: any) => (
    <Link as={NextLink} href={{ pathname: `/blog/${blog.slug}` }}>
        <Box
            as="article"
            mb={4}
            css={css`
                cursor: pointer;
            `}
        >
            <Box
                mb={2}
                css={css`
                    position: relative;
                    height: 304px;
                `}
            >
                <Image
                    as={NextImage}
                    layout="fill"
                    src={mountain}
                    alt={blog.slug}
                />
            </Box>
            <Text type="xsmall">{blog.date}</Text>
            <Heading type="h3">{blog.headline}</Heading>
            <Text type="small">{blog.description}</Text>
            <Tags tags={blog.tags} />
        </Box>
    </Link>
);

const AdditionalFeaturedPost = ({ blog }: any) => (
    <Link as={NextLink} href={{ pathname: `/blog/${blog.slug}` }}>
        <Box
            as="article"
            mb={4}
            css={css`
                cursor: pointer;
            `}
        >
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
                            as={NextImage}
                            layout="fill"
                            src={mountain}
                            alt={blog.slug}
                        />
                    </Box>
                </Col>
                <Col md={12} direction="column">
                    <Text type="xsmall">{blog.date}</Text>
                    <Heading type="h3">{blog.headline}</Heading>
                    <Text type="small">{blog.description}</Text>
                    <Tags tags={blog.tags} />
                </Col>
            </Row>
        </Box>
    </Link>
);

const Post = ({ blog }: any) => (
    <Link as={NextLink} href={{ pathname: `/blog/${blog.slug}` }}>
        <Box
            as="article"
            mb={4}
            css={css`
                cursor: pointer;
            `}
        >
            <Box
                mb={2}
                css={css`
                    position: relative;
                    height: 194px;
                `}
            >
                <Image
                    as={NextImage}
                    layout="fill"
                    src={mountain}
                    alt="Picture of a mountain"
                />
            </Box>
            <Text type="xsmall">{blog.date}</Text>
            <Heading type="h3">{blog.headline}</Heading>
            <Text type="small">{blog.description}</Text>
            <Tags tags={blog.tags} />
        </Box>
    </Link>
);

export const Blog = () => (
    <>
        <Container>
            <Box pb={2}>
                <Heading type="h2">Featured blog posts</Heading>
            </Box>
            <Row>
                <Col lg={12}>
                    <FeaturedPost blog={FEATURE_MAIN_POST} />
                </Col>
                <Col lg={12} direction="column">
                    <AdditionalFeaturedPost blog={FEATURE_ADDITIONAL_BLOG_1} />
                    <AdditionalFeaturedPost blog={FEATURE_ADDITIONAL_BLOG_2} />
                </Col>
            </Row>
        </Container>
        <Container>
            <Box pb={2}>
                <Heading type="h2">All blog posts</Heading>
            </Box>
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
    </>
);
