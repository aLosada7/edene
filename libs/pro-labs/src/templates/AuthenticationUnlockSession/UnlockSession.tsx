import { Heading, TextInput, Button, Image, Box } from '@edene/components';
import { grays } from '@edene/foundations';

import { login, loginForm, wrapper, profileImage } from './styles';

const AuthenticationUnlockSession = () => {
    return (
        <Box css={wrapper}>
            <Box css={login}>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                    alt="Profile image"
                    css={profileImage}
                />
                <Heading size="h3" color={grays[4]} mb={2}>
                    Welcome Back!
                </Heading>
                <Heading size="h2" mb={8} weight="bold">
                    Virat Kohli
                </Heading>

                <form css={loginForm}>
                    <TextInput
                        type="password"
                        placeholder="Enter your passcode"
                    />
                    <Button type="submit" size="block">
                        Login
                    </Button>
                    <Button component="a" href="#" variant="link">
                        Forgot your passcode?
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default AuthenticationUnlockSession;
