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
    Box,
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
            <Row direction="column" gap={3} noGlutters>
                <Box>
                    <Box pb={2}>
                        <Heading size="h3">Address</Heading>
                    </Box>
                    <TextInput label="Full Address" />
                    <Row>
                        <Col md={12}>
                            <TextInput label="Province" />
                        </Col>
                        <Col md={12}>
                            <TextInput label="Zip" />
                        </Col>
                    </Row>
                </Box>

                <Box>
                    <Box pb={2}>
                        <Heading size="h3">Tenants</Heading>
                    </Box>
                    <Person />
                    <Button size="small" icon="add" iconSide="right">
                        Add tenant
                    </Button>
                </Box>

                <Box>
                    <Box pb={2}>
                        <Heading size="h3">Landlords</Heading>
                    </Box>
                    <Person />
                    <Button size="small" icon="add" iconSide="right">
                        Add landlord
                    </Button>
                </Box>

                <Row align="space-between-center" noGlutters>
                    <Button variant="text" icon="arrow_back">
                        Back
                    </Button>
                    <Group>
                        <Button variant="outlined">Cancel</Button>
                        <Button>Save</Button>
                    </Group>
                </Row>
            </Row>
        </Form>
    );
};
