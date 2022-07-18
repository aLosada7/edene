import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Title, Text, Container } from '@dana-components';
import { GithubIcon, StorybookIcon } from '@edene/foundations';
import { Tabs, Tab } from '@edene/components';
import PostContent from '../../shared/components/PostContent';
import {
    getParsedFileContentBySlug,
    renderMarkdown,
} from '../../shared/utils/markdown/markdown';
import { MarkdownRenderingResult } from '../../shared/utils/markdown/types';

const platformText = css`
    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        width: fit-content;

        :hover {
            text-decoration: underline;
        }

        span {
            margin-left: 0.5rem;
        }
    }
`;

interface ArticleProps extends ParsedUrlQuery {
    slug: string;
}

const POSTS_PATH = join(process.cwd(), 'content/docs/components');

const Components = ({ slug, frontMatter, usage, props }) => {
    const [selectedTab, setSelectedTab] = useState('usage');

    const router = useRouter();

    useEffect(() => {
        if (router.query.tab) setSelectedTab(router.query.tab as string);
    }, [router.query]);

    const onTabSelected = (tabKey) => {
        setSelectedTab(tabKey);
        router.push(
            { href: '/components/[slug]', query: { tab: tabKey } },
            `/components/${slug}?tab=${tabKey}`,
            { shallow: true }
        );
    };

    return (
        <Container>
            <Title mb={4}>{frontMatter.title}</Title>
            <Text cssOverrides={platformText}>
                <a
                    href={frontMatter.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubIcon size="small" />
                    <span>View source code</span>
                </a>
            </Text>
            <Text cssOverrides={platformText}>
                <a
                    href={frontMatter.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                >
                    <StorybookIcon size="small" />
                    <span>Storybook</span>
                </a>
            </Text>
            <Tabs
                active={selectedTab}
                onTabChange={(tabKey) => onTabSelected(tabKey)}
            >
                <Tab tabKey="usage" label="Usage">
                    <PostContent content={usage} />
                </Tab>
                <Tab tabKey="props" label="Props">
                    <PostContent content={props} />
                </Tab>
            </Tabs>
        </Container>
    );
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
    params,
}: {
    params: ArticleProps;
}) => {
    // read markdown file into content and frontmatter
    const articleMarkdownContent = getParsedFileContentBySlug(
        params.slug,
        POSTS_PATH
    );

    // generate HTML
    const renderedUsageHTML = await renderMarkdown(
        articleMarkdownContent.usage
    );
    const renderedPropsHTML = await renderMarkdown(
        articleMarkdownContent.props
    );

    return {
        props: {
            slug: params.slug,
            frontMatter: articleMarkdownContent.frontMatter,
            usage: renderedUsageHTML,
            props: renderedPropsHTML,
        },
    };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
    const paths = fs
        .readdirSync(POSTS_PATH)
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default Components;
