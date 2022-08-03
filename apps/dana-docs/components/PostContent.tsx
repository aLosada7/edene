import { MDXRemote } from 'next-mdx-remote';

import { Title, Text, Image } from '@edene/components';
import * as edeneComponents from '@edene/components';
import * as edeneAnimations from '@edene/animations';

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

const components = {
    ...generalComponents,
    ...edeneComponents,
    ...edeneAnimations,
};

const PostContent = ({ content }) => (
    <MDXRemote {...content} components={components} />
);

export default PostContent;
