import { css } from '@emotion/react';
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
} from '@edene/components';

import CountrySelector from '../../../components/simple/CountrySelector/CountrySelector';

const AccountSettings = () => (
    <Container pv={8}>
        <Form>
            <Heading size="h4" mb={6}>
                Account Settings
            </Heading>
            <Divider />
            <Row>
                <Col md={8} lg={8} vStack={2}>
                    <Heading
                        size="h5"
                        mb={2}
                        cssOverrides={css`
                            padding-top: 1rem;
                        `}
                    >
                        Basics
                    </Heading>
                    <Text size="sm">
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
                <Col md={8} lg={8} vStack={2}>
                    <Heading
                        size="h5"
                        mb={2}
                        cssOverrides={css`
                            padding-top: 1rem;
                        `}
                    >
                        Profile
                    </Heading>
                    <Text size="sm">
                        This information will be shown publicy so be careful
                        what information you provide.
                    </Text>
                </Col>
                <Col md={16} direction="column">
                    <Row py={4}>
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
            <Row py={4}>
                <Col md={8}></Col>
                <Col md={16} hStack={4}>
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
    </Container>
);

export default AccountSettings;
