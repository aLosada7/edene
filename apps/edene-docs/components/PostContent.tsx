import { MDXRemote } from 'next-mdx-remote';

import {
    Title,
    Text,
    Image,
    ImageProps,
    TitleProps,
    TextProps,
    Table,
    TableBody,
    TableHeader,
    TableHead,
    TableCell,
    TableRow,
    List,
    ListItem,
} from '@edene/components';
import * as edeneComponents from '@edene/components';
import * as edeneAnimations from '@edene/animations';

import CodeBlock from './CodeBlock';

const H2Title = (props: TitleProps) => (
    <Title size="h4" mt={8} mb={4} {...props} />
);
const PText = (props: TextProps) => <Text mt={4} {...props} />;

const generalComponents = {
    h2: H2Title,
    p: PText,
    pre: (props: any) => <div {...props} />,
    img: (props: ImageProps) => {
        return <Image size="c" objectFit="contain" targetBlank {...props} />;
    },
    code: CodeBlock,
    ul: (props: any) => <List styleType="disclosure-close" {...props} />,
    li: (props: any) => <ListItem {...props} />,
    table: (props: any) => <Table {...props} />,
    thead: (props: any) => <TableHead {...props} />,
    tbody: (props: any) => <TableBody {...props} />,
    tr: (props: any) => <TableRow {...props} />,
    th: (props: any) => <TableHeader {...props} />,
    td: (props: any) => <TableCell {...props} />,
};

const components = {
    ...generalComponents,
    ...edeneComponents,
    ...edeneAnimations,
};

const PostContent = ({ content }: any) => (
    <MDXRemote {...content} components={components} />
);

export default PostContent;
