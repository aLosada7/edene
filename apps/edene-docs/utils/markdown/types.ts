import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface FrontMatter {
    [prop: string]: string;
}

export interface MarkdownDocument {
    frontMatter: FrontMatter;
    content?: string;
    documentation?: string;
    props?: string;
}

export interface MarkdownRenderingResult {
    frontMatter: FrontMatter;
    content?: MDXRemoteSerializeResult;
    documentation?: MDXRemoteSerializeResult;
    props?: MDXRemoteSerializeResult;
}
