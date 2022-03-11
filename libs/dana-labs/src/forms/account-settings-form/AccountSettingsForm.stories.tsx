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
    Text,
} from '@dana';

export default {
    title: 'DanaLabs/Forms',
    component: Form,
};

export const AccountSettings = () => (
    <Form>
        <h1>Account Settings</h1>
        <Divider />
        <Row py={4}>
            <Col sm={24} md={8} lg={8}>
                <Text size="h3">Personal Info</Text>
            </Col>
            <Col sm={24} md={16} lg={16} verticalStack={2}>
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
                <Button color="success" onClick={action('onSubmit')}>
                    Save
                </Button>
                <Button
                    variant="outline"
                    color="dark"
                    onClick={action('onCancel')}
                >
                    Cancel
                </Button>
            </Col>
        </Row>
    </Form>
);
