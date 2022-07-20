import { MDXRemote } from 'next-mdx-remote';

import { Title, Text, Image, MenuButton } from '@dana-components';
import {
    Accordion,
    AccordionRow,
    Button,
    Tabs,
    Tab,
    Breadcrumb,
    BreadcrumbItem,
} from '@edene/components';

import CodeBlock from './CodeBlock';

const H2Title = (props) => <Title size="h4" mt={8} mb={4} {...props} />;
const PText = (props) => <Text mt={4} {...props} />;

const generalComponents = {
    h2: H2Title,
    p: PText,
    pre: (props) => <div {...props} />,
    img: (props) => {
        return <Image size="c" objectFit="contain" targetBlank {...props} />;
    },
    code: CodeBlock,
    ul: (props) => (
        <ul
            style={{ marginLeft: '2rem', listStyle: 'disc !important' }}
            {...props}
        />
    ),
    table: (props) => <table style={{ width: '100%' }} {...props} />,
};

const danaComponents = {
    Accordion,
    AccordionRow,
    Breadcrumb,
    BreadcrumbItem,
    MenuButton,
    Button,
    Tabs,
    Tab,
};

const components = { ...generalComponents, ...danaComponents };

const PostContent = ({ content }) => (
    <MDXRemote {...content} components={components} />
);

export default PostContent;
