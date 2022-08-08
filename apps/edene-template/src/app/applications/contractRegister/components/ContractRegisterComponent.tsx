import {
    Form,
    TextInput,
    Title,
    Row,
    Col,
    Select,
    Option,
    Button,
} from '@edene/components';
import { css } from '@emotion/react';

const vStack = css`
    > * {
        margin-right: 1rem;
    }
`;

const Person = () => (
    <Row>
        <Col md={8} lg={4}>
            <Select label="Identification Type" value="dni">
                <Option value="dni">
                    <span>DNI</span>
                </Option>
                <Option value="passport">
                    <span>Passport</span>
                </Option>
            </Select>
        </Col>
        <Col md={16} lg={8}>
            <TextInput label="Identification Number" />
        </Col>
        <Col lg={12}>
            <TextInput label="Full Name" />
        </Col>
    </Row>
);

export const ContractRegisterComponent = () => {
    return (
        <Form>
            <Title mt={4}>Address</Title>
            <TextInput label="Full Address" />
            <Row>
                <Col md={12}>
                    <TextInput label="Province" />
                </Col>
                <Col md={12}>
                    <TextInput label="Zip" />
                </Col>
            </Row>

            <Title mt={4}>Tenants</Title>
            <Person />
            <Button variant="link" iconLeft="add">
                Add tenant
            </Button>

            <Title mt={4}>Landlords</Title>
            <Person />
            <Button variant="link" iconLeft="add">
                Add landlord
            </Button>

            <Row align="space-between-center" py={2}>
                <Button iconLeft="arrow_back" variant="link">
                    Back
                </Button>
                <div css={vStack}>
                    <Button variant="outline">Cancel</Button>
                    <Button>Save</Button>
                </div>
            </Row>
        </Form>
    );
};
