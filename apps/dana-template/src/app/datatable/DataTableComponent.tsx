import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableCell,
    TableRow,
    useToast,
} from '@dana';
import ReactDOM from 'react-dom';

export const DataTableComponent = () => {
    const rows = [
        {
            name: 'name',
            protocol: 'protocol',
            port: 'port',
            rule: 'rule',
            groups: 'groups',
            status: 'status',
        },
        {
            name: 'name',
            protocol: 'protocol',
            port: 'port',
            rule: 'rule',
            groups: 'groups',
            status: 'status',
        },
        {
            name: 'name',
            protocol: 'protocol',
            port: 'port',
            rule: 'rule',
            groups: 'groups',
            status: 'status',
        },
        {
            name: 'name',
            protocol: 'protocol',
            port: 'port',
            rule: 'rule',
            groups: 'groups',
            status: 'status',
        },
    ];

    // const { toast } = useToast();
    // toast();

    return (
        <>
            <h1>DataTable</h1>
            <DataTable>
                <TableContainer
                    title="DataTable"
                    description="Use the toolbar menu to add rows and headers"
                >
                    <Table>
                        <TableHead>
                            <TableHeader key="name">Name</TableHeader>
                            <TableHeader key="protocol">Protocol</TableHeader>
                            <TableHeader key="port">Port</TableHeader>
                            <TableHeader key="rule" align="left">
                                Rule
                            </TableHeader>
                            <TableHeader key="groups">
                                Attached Groups
                            </TableHeader>
                            <TableHeader key="status">Status</TableHeader>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.protocol}</TableCell>
                                    <TableCell>{row.port}</TableCell>
                                    <TableCell align="left">
                                        {row.rule}
                                    </TableCell>
                                    <TableCell>{row.groups}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DataTable>
        </>
    );
};
