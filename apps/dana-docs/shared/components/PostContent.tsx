import { MDXRemote } from 'next-mdx-remote';

import { Title, Text, Image, Accordion, AccordionRow } from '@dana-components';

const H2Title = (props) => <Title size="h3" mt={8} {...props} />;
const PText = (props) => <Text mt={4} {...props} />;

const generalComponents = {
    h2: H2Title,
    p: PText,
    pre: (props) => <div {...props} />,
    img: (props) => {
        return <Image size="c" objectFit="contain" targetBlank {...props} />;
    },
    ul: (props) => (
        <ul
            style={{ marginLeft: '2rem', listStyle: 'disc !important' }}
            {...props}
        />
    ),
};

const danaComponents = {
    Accordion,
    AccordionRow,
};

const components = { ...generalComponents, ...danaComponents };

const PostContent = ({ content }) => (
    <MDXRemote {...content} components={components} />
);

export default PostContent;
