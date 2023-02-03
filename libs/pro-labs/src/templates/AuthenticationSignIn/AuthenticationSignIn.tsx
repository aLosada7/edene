import {
    Button,
    Heading,
    Image,
    Stack,
    Box,
    TextInput,
    Form,
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
                <Box>
                    <Heading size="h2" mb={1} color={grays[9]}>
                        Login
                    </Heading>
                    <Heading size="h5" color={grays[3]} mb={8}>
                        Welcome Back!
                    </Heading>
                </Box>

                <Form>
                    <Stack gap={3}>
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
                        <Box mv={2}>
                            <Button component="a" href="#" variant="link">
                                Forgot your passcode?
                            </Button>
                        </Box>
                    </Stack>
                </Form>
            </Box>
        </Box>
    );
};

export default AuthenticationSignIn;
