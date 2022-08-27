import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';

import { Container } from '@edene/components';

import PostContent from '../../components/PostContent';
import {
    getParsedFileOverviewContentBySlug,
    renderMarkdown,
} from '../../utils/markdown/markdown';
import { MarkdownRenderingResult } from '../../utils/markdown/types';

interface ArticleProps extends ParsedUrlQuery {
    slug: string;
}

const POSTS_PATH = join(process.cwd(), 'content/docs/overview');

const Overview = ({ html }: any) => {
    return (
        <Container pv={8}>
            <PostContent content={html} />
        </Container>
    );
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
    params,
}: {
    params: ArticleProps;
}) => {
    // read markdown file into content and frontmatter
    const articleMarkdownContent = getParsedFileOverviewContentBySlug(
        params.slug,
        POSTS_PATH
    );

    // generate HTML
    const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

    return {
        props: {
            frontMatter: articleMarkdownContent.frontMatter,
            html: renderedHTML,
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

export default Overview;
