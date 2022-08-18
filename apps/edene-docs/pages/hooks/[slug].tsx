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

const POSTS_PATH = join(process.cwd(), 'content/docs/hooks');

const Hooks = ({ slug, frontMatter, documentation, props }: any) => {
    const [selectedTab, setSelectedTab] = useState('documentation');

    const router = useRouter();

    useEffect(() => {
        if (router.query.tab) setSelectedTab(router.query.tab as string);
    }, [router.query]);

    const onTabSelected = (tabKey: string) => {
        setSelectedTab(tabKey);
        router.push(
            { href: '/hooks/[slug]', query: { tab: tabKey } },
            `/hooks/${slug}?tab=${tabKey}`,
            { shallow: true }
        );
    };

    return (
        <Container pv={8}>
            <ComponentHeader frontMatter={frontMatter} />
            <ComponentTabs
                selectedTab={selectedTab}
                onTabSelected={onTabSelected}
                documentation={documentation}
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
    const rendereddocumentationHTML = await renderMarkdown(
        articleMarkdownContent.documentation
    );
    const renderedPropsHTML = await renderMarkdown(
        articleMarkdownContent.props
    );

    return {
        props: {
            slug: params.slug,
            frontMatter: articleMarkdownContent.frontMatter,
            documentation: rendereddocumentationHTML,
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

export default Hooks;
