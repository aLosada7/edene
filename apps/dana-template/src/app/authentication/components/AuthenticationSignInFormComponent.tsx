import { Form, TextInput } from '@dana';

export const AuthenticationSignInFormComponent = () => (
    <Form>
        <TextInput label="Email address" required />

        <TextInput label="Password" required />
    </Form>
);
