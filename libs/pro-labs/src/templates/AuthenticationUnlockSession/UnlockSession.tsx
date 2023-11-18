import {
    Heading,
    TextInput,
    Button,
    Image,
    Box,
    Link,
} from '@edene/components';
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
                <Box mb={2}>
                    <Heading type="h3" color={grays[4]}>
                        Welcome Back!
                    </Heading>
                </Box>
                <Box mb={8}>
                    <Heading type="h2" weight="bold">
                        Virat Kohli
                    </Heading>
                </Box>

                <form css={loginForm}>
                    <TextInput
                        type="password"
                        placeholder="Enter your passcode"
                    />
                    <Button type="submit" size="block">
                        Login
                    </Button>
                    <Link href="#">Forgot your passcode?</Link>
                </form>
            </Box>
        </Box>
    );
};

export default AuthenticationUnlockSession;
