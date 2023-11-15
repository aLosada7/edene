import {
    Button,
    Heading,
    Image,
    Box,
    TextInput,
    Form,
    Row,
} from '@edene/components';
import { grays } from '@edene/foundations';

import { login, profileImage, wrapper, colorWhite } from './styles';

const AuthenticationSignIn = () => {
    return (
        <Box css={wrapper}>
            <Box css={login}>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                    alt="Profile image"
                    css={profileImage}
                />
                <>
                    <Box mb={1}>
                        <Heading size="h2" color={grays[9]}>
                            Login
                        </Heading>
                    </Box>
                    <Box mb={8}>
                        <Heading size="h5" color={grays[3]}>
                            Welcome Back!
                        </Heading>
                    </Box>
                </>

                <Form>
                    <Row direction="column" gap={3}>
                        <Box>
                            <TextInput
                                type="email"
                                placeholder="Username"
                                iconLeft="account_circle"
                                css={colorWhite}
                            />
                            <TextInput
                                type="password"
                                placeholder="Password"
                                iconLeft="lock"
                                css={colorWhite}
                            />
                        </Box>
                        <Button type="submit" size="block">
                            Login
                        </Button>
                        <Box my={2}>
                            <Button as="a" href="#" variant="text">
                                Forgot your passcode?
                            </Button>
                        </Box>
                    </Row>
                </Form>
            </Box>
        </Box>
    );
};

export default AuthenticationSignIn;
