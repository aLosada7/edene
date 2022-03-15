import { action } from '@storybook/addon-actions';

import {
    TextInput,
    Col,
    Divider,
    Row,
    Button,
    Form,
    Select,
    Option,
    Textarea,
    Checkbox,
    Title,
} from '@dana';

export default {
    title: 'DanaLabs/Forms',
    component: Form,
};

export const AccountSettings = () => (
    <Form>
        <Title size="h4">Account Settings</Title>
        <Divider />
        <Row py={4}>
            <Col md={8} lg={8}>
                <Title size="h4">Personal Info</Title>
            </Col>
            <Col md={16} direction="column">
                <TextInput label="Name" />

                <TextInput label="Email" required />

                <Select label="Genre">
                    <Option value="man">Man</Option>
                    <Option value="woman">Woman</Option>
                </Select>

                <Textarea label="Comments"></Textarea>

                <Checkbox>I accept the conditions.</Checkbox>
            </Col>
        </Row>
        <Row py={4}>
            <Col sm={24} md={8} lg={8}></Col>
            <Col sm={24} md={16} lg={16} horizontalStack={4}>
                <Button
                    variant="link"
                    color="dark"
                    onClick={action('onCancel')}
                >
                    Cancel
                </Button>
                <Button color="success" onClick={action('onSubmit')}>
                    Save
                </Button>
            </Col>
        </Row>
    </Form>
);
