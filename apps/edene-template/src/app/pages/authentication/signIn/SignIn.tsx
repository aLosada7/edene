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

const SignIn = () => {
    return (
        <Box cssOverrides={wrapper}>
            <Box cssOverrides={login}>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                    alt="Profile image"
                    cssOverrides={profileImage}
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
                                cssOverrides={colorWhite}
                            />
                            <TextInput
                                type="password"
                                placeholder="Password"
                                iconLeft="lock"
                                cssOverrides={colorWhite}
                            />
                        </Box>
                        <Button type="submit" size="block">
                            Login
                        </Button>
                        <Box mt={6}>
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

export default SignIn;