import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Container } from '@edene/components';
import {
    getParsedFileContentBySlug,
    renderMarkdown,
} from '../../utils/markdown/markdown';
import { MarkdownRenderingResult } from '../../utils/markdown/types';
import { ComponentHeader } from '../../components/ComponentHeader';
import { ComponentTabs } from '../../components/ComponentTabs';

interface ArticleProps extends ParsedUrlQuery {
    slug: string;
}

const POSTS_PATH = join(process.cwd(), 'content/docs/animations');

const Animations = ({ slug, frontMatter, usage, props }) => {
    const [selectedTab, setSelectedTab] = useState('usage');

    const router = useRouter();

    useEffect(() => {
        if (router.query.tab) setSelectedTab(router.query.tab as string);
    }, [router.query]);

    const onTabSelected = (tabKey) => {
        setSelectedTab(tabKey);
        router.push(
            { href: '/animations/[slug]', query: { tab: tabKey } },
            `/animations/${slug}?tab=${tabKey}`,
            { shallow: true }
        );
    };

    return (
        <Container>
            <ComponentHeader frontMatter={frontMatter} />
            <ComponentTabs
                selectedTab={selectedTab}
                onTabSelected={onTabSelected}
                usage={usage}
                props={props}
            />
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

export default Animations;