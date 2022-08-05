import { Form, TextInput } from '@edene/components';

export const AuthenticationSignInFormComponent = () => (
    <Form>
        <TextInput label="Email address" required />

        <TextInput label="Password" required />
    </Form>
);
