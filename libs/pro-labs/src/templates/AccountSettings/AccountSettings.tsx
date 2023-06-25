import { action } from '@storybook/addon-actions';

import {
    TextInput,
    Container,
    Col,
    Divider,
    Row,
    Button,
    Form,
    Select,
    Option,
    Textarea,
    Checkbox,
    Heading,
    Text,
    Box,
} from '@edene/components';
import CountrySelector from '../../components/simple/CountrySelector/CountrySelector';

const AccountSettings = () => (
    <Container>
        <Form>
            <Box mb={6}>
                <Heading size="h4">Account Settings</Heading>
            </Box>
            <Divider />
            <Row>
                <Col md={8} lg={8} direction="column" gap={4}>
                    <Box pt={4}>
                        <Heading size="h5">Basics</Heading>
                    </Box>
                    <Text size="small">
                        Having an up-to-date email address attached to your
                        account is a great step toward improved account
                        security.
                    </Text>
                </Col>
                <Col md={16} direction="column">
                    <Row py={4}>
                        <Col md={12}>
                            <TextInput label="Name" />
                        </Col>
                        <Col md={12}>
                            <TextInput label="Email" />
                        </Col>
                    </Row>

                    <Select label="Genre">
                        <Option value="man">Man</Option>
                        <Option value="woman">Woman</Option>
                    </Select>

                    <CountrySelector />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col md={8} lg={8} direction="column" gap={4}>
                    <Box pt={4}>
                        <Heading size="h5">Profile</Heading>
                    </Box>
                    <Text size="small">
                        This information will be shown publicy so be careful
                        what information you provide.
                    </Text>
                </Col>
                <Col md={16} direction="column">
                    <Row py={2}>
                        <Col md={12}>
                            <TextInput label="First Name" required />
                        </Col>
                        <Col md={12}>
                            <TextInput label="Last Name" required />
                        </Col>
                    </Row>

                    <TextInput label="Username" required />

                    <Textarea label="Small description"></Textarea>

                    <Checkbox label="I accept the conditions."></Checkbox>
                </Col>
            </Row>
            <Row align="end-center" py={4} gap={4}>
                <Button
                    variant="outlined"
                    color="dark"
                    onClick={action('onCancel')}
                >
                    Cancel
                </Button>
                <Button color="success" onClick={action('onSubmit')}>
                    Save
                </Button>
            </Row>
        </Form>
    </Container>
);

export default AccountSettings;
