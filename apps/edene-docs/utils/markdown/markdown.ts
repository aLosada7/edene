import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MarkdownDocument } from './types';
import { serialize } from 'next-mdx-remote/serialize';

export const getParsedFileContentBySlug = (
    slug: string,
    postsPath: string
): MarkdownDocument => {
    return {
        ...getUsageContent(slug, postsPath),
        props: getPropsContent(slug, postsPath),
    };
};

export const getUsageContent = (slug: string, postsPath: string) => {
    const postFilePath = join(postsPath, `${slug}/usage.mdx`);
    const fileContents = fs.readFileSync(postFilePath);

    const { data, content } = matter(fileContents);

    return {
        frontMatter: data,
        usage: content,
    };
};

export const getPropsContent = (slug: string, postsPath: string) => {
    const postFilePath = join(postsPath, `${slug}/props.mdx`);
    const fileContents = fs.readFileSync(postFilePath);

    const { content } = matter(fileContents);

    return content;
};

export const getParsedFileOverviewContentBySlug = (
    slug: string,
    postsPath: string
) => {
    const postFilePath = join(postsPath, `${slug}.mdx`);
    const fileContents = fs.readFileSync(postFilePath);

    const { data, content } = matter(fileContents);

    return {
        frontMatter: data,
        content,
    };
};

export const renderMarkdown = (markdownContent: string) => {
    return serialize(markdownContent || '');
};
