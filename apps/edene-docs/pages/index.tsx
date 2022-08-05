import { css } from '@emotion/react';

import { FadeIn } from '@edene/animations';

const wrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px);
`;

export function Index() {
    return (
        <section css={wrapper}>
            <FadeIn>
                <h1>
                    <span> Hello there, </span>
                    Welcome to edene 👋
                </h1>
            </FadeIn>
        </section>
    );
}

export default Index;
