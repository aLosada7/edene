import { css } from '@emotion/react';

import { Title, Text } from '@edene/components';
import { GithubIcon, StorybookIcon } from '@edene/foundations';

const platformText = css`
    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        width: fit-content;

        :hover {
            text-decoration: underline;
        }

        span {
            margin-left: 0.5rem;
        }
    }
`;

export const ComponentHeader = ({frontMatter}) => (
    <>
        <Title mb={4}>{frontMatter.title}</Title>
        <Text cssOverrides={platformText}>
            <a href={frontMatter.sourceCode} target="_blank" rel="noreferrer">
                <GithubIcon size="small" />
                <span>View source code</span>
            </a>
        </Text>
        <Text cssOverrides={platformText}>
            <a href={frontMatter.sourceCode} target="_blank" rel="noreferrer">
                <StorybookIcon size="small" />
                <span>Storybook</span>
            </a>
        </Text>
    </>
);
