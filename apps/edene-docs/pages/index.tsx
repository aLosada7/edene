import { css } from '@emotion/react';
import Link from 'next/link';

import { FadeIn } from '@edene/animations';
import {
    Title,
    Text,
    Button,
    GithubIcon,
    Container,
    Row,
} from '@edene/components';
import { useThemeContext } from '@edene/foundations';

const heroSection = css`
    height: calc(100vh - 64px);
`;

const heroWrapper = css`
    display: flex;
    align-items: center;
    height: inherit;
`;

const verticalStack = css`
    > * {
        margin-right: 1rem;
    }
`;

export function Index() {
    const { theme } = useThemeContext();

    return (
        <section css={heroSection}>
            <Container cssOverrides={heroWrapper}>
                <Row direction="column">
                    <FadeIn>
                        <Title size="h3" color={theme.color} mb={2}>
                            edene
                        </Title>
                    </FadeIn>
                    <Text size="xlg" color={theme.black}>
                        Create beautiful user experiences in React with a focus
                        on spped, accesibility and consistency.
                    </Text>
                    <Row noGlutters py={2} cssOverrides={verticalStack}>
                        <Link href="/overview/getting-started" passHref>
                            <Button>Get Started</Button>
                        </Link>
                        <Button
                            component="a"
                            href="https://github.com/aLosada7/edene"
                            color="dark"
                        >
                            <GithubIcon />
                        </Button>
                    </Row>
                </Row>
            </Container>
        </section>
    );
}

export default Index;
