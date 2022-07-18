import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';

import PostContent from '../../shared/components/PostContent';
import {
    getParsedFileContentBySlug,
    renderMarkdown,
} from '../../shared/utils/markdown/markdown';
import { MarkdownRenderingResult } from '../../shared/utils/markdown/types';
import { Title, Text, Container, Row } from '@dana-components';
import { GithubIcon } from '@dana-icons';

interface ArticleProps extends ParsedUrlQuery {
    slug: string;
}

const POSTS_PATH = join(process.cwd(), 'apps/dana-docs/_articles/components');

const Components = ({ frontMatter, html }) => {
    return (
        <Container>
            <Title mb={4}>{frontMatter.title}</Title>
            <Text>
                <Row>
                <GithubIcon />
                <a href={frontMatter.sourceCode} target="_blank" rel="noreferrer">
                    View source code
                </a>
                </Row>
            </Text>
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
    const articleMarkdownContent = getParsedFileContentBySlug(
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

export default Components;
