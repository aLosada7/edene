import { Container } from '@edene/components';

import { AuthenticationSignInFormComponent } from '../../components/AuthenticationSignInFormComponent';

export const AuthenticationSignInContainer = () => {
    // Here you can validate the imports and launch the authentication process

    return (
        <Container mt={4}>
            <AuthenticationSignInFormComponent />
        </Container>
    );
};
