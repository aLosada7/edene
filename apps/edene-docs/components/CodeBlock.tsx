import { css } from '@emotion/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import * as edeneComponents from '@edene/components';
import * as edeneAnimations from '@edene/animations';

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

const preview = css`
    border: 1px solid #f1f3f5;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 1rem;
`;

const CodeBlock = ({ children: code, editable = false, className }: any) => {
    const language = className?.replace(/language-/, '');

    return (
        <LiveProvider
            code={code}
            disabled={!editable}
            scope={{ ...edeneComponents, ...edeneAnimations, css }}
        >
            {language === 'tsx' && (
                <div css={preview}>
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
