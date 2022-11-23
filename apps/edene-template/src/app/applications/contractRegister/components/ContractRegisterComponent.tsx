import {
    Form,
    TextInput,
    Heading,
    Row,
    Col,
    Select,
    Option,
    Button,
    Group,
} from '@edene/components';

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
            <Heading mt={4}>Address</Heading>
            <TextInput label="Full Address" />
            <Row>
                <Col md={12}>
                    <TextInput label="Province" />
                </Col>
                <Col md={12}>
                    <TextInput label="Zip" />
                </Col>
            </Row>

            <Heading mt={4}>Tenants</Heading>
            <Person />
            <Button variant="link" icon="add">
                Add tenant
            </Button>

            <Heading mt={4}>Landlords</Heading>
            <Person />
            <Button variant="link" icon="add">
                Add landlord
            </Button>

            <Row align="space-between-center" noGlutters>
                <Button icon="arrow_back" variant="link">
                    Back
                </Button>
                <Group>
                    <Button variant="outlined">Cancel</Button>
                    <Button>Save</Button>
                </Group>
            </Row>
        </Form>
    );
};
