import { css } from '@emotion/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import * as edeneComponents from '@edene/components';
import * as edeneAnimations from '@edene/animations';
import { grays } from '@edene/foundations';

const codeBlock = css`
    background-color: rgba(248, 249, 250, 0.65);
    border: 1px solid #f1f3f5;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    pre {
        overflow-x: auto;
        pointer-events: auto !important;

        .token-line {
            white-space: pre;
        }
    }
`;

const preview = (componentWidth: boolean) => css`
    border: 1px solid #f1f3f5;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 1rem;

    ${componentWidth &&
    `
        > div {
            display: flex;
            justify-content: center;
            max-width: 540px;
            margin-left: auto;
            margin-right: auto;
        }
    `}
`;

// This a momentarily hack to center some components in the code block
const centeredComponents = ['Accordion', 'Card', 'Carousel', 'Select'];

const CodeBlock = ({ children: code, editable = false, className }: any) => {
    const language = className?.replace(/language-/, '');
    const isCenteredComponent = centeredComponents.some(
        (component) =>
            (code.includes(`<${component}>`) &&
                code.includes(`</${component}>`)) ||
            code.includes(`<${component}`)
    );

    return (
        <LiveProvider
            code={code}
            disabled={!editable}
            scope={{ ...edeneComponents, ...edeneAnimations, grays, css }}
        >
            {language === 'tsx' && (
                <div css={preview(isCenteredComponent)}>
                    <LivePreview />
                </div>
            )}
            {editable && <LiveError />}
            <div css={codeBlock}>
                <LiveEditor />
            </div>
        </LiveProvider>
    );
};

export default CodeBlock;
