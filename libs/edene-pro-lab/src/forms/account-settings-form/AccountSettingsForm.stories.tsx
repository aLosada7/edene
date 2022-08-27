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
    Title,
    Text,
} from '@edene/components';

import CountrySelector from '../../selector/country-selector/CountrySelector';

export default {
    title: 'EdeneProLab/Forms',
    component: Form,
    decorators: [
        (Story: any) => (
            <section style={{ backgroundColor: 'hsl(210, 32%, 93%)' }}>
                <Story />
            </section>
        ),
    ],
};

export const AccountSettings = () => (
    <Container pv={8}>
        <Form>
            <Title size="h4" mb={6}>
                Account Settings
            </Title>
            <Divider />
            <Row>
                <Col md={8} lg={8} vStack={2}>
                    <Title
                        size="h5"
                        mb={2}
                        cssOverrides={css`
                            padding-top: 1rem;
                        `}
                    >
                        Basics
                    </Title>
                    <Text size="sm">
                        Having an up-to-date email address attached to your
                        account is a great step toward improved account
                        security.
                    </Text>
                </Col>
                <Col md={16} direction="column">
                    <TextInput
                        label="Name"
                        cssLabelOverrides={css`
                            padding-top: 1rem;
                        `}
                    />

                    <TextInput label="Email" required />

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
                    <Title
                        size="h5"
                        mb={2}
                        cssOverrides={css`
                            padding-top: 1rem;
                        `}
                    >
                        Profile
                    </Title>
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
