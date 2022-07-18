import { css } from '@emotion/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import {
    Accordion,
    AccordionRow,
    Breadcrumb,
    BreadcrumbItem,
    MenuButton,
} from '@dana-components';

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

const scope = {
    Accordion,
    AccordionRow,
    Breadcrumb,
    BreadcrumbItem,
    MenuButton,
};

const CodeBlock = ({ children: code, editable = false }: any) => (
    <LiveProvider code={code} disabled={!editable} scope={scope}>
        <div css={preview}>
            <LivePreview />
        </div>
        {editable && <LiveError />}
        <div css={codeBlock}>
            <LiveEditor />
        </div>
    </LiveProvider>
);

export default CodeBlock;
