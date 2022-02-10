import { action } from '@storybook/addon-actions';

import type { Story } from '../../../../lib/storybook-emotion-10-fixes';
import { asChromaticStory } from '../../../../lib/story-intents';
import {
    DataTable,
    DataTableProps,
    TableBody,
    TableHead,
    TableContainer,
    TableToolbar,
    TableHeader,
    TableRow,
    TableCell,
    TableToolbarContent,
    TableToolbarSearch,
} from '.';
import { Table } from './Table';
import { rows } from './shared';

export default {
    component: DataTable,
    title: 'Components/Data Display/Table',
};

export const Basic: Story<DataTableProps> = (args) => (
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
                    <TableHeader key="groups">Attached Groups</TableHeader>
                    <TableHeader key="status">Status</TableHeader>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.protocol}</TableCell>
                            <TableCell>{row.port}</TableCell>
                            <TableCell align="left">{row.rule}</TableCell>
                            <TableCell>{row.groups}</TableCell>
                            <TableCell>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </DataTable>
);
asChromaticStory(Basic);

export const WithToolbar: Story<DataTableProps> = (args) => (
    <DataTable>
        <TableContainer
            title="DataTable"
            description="Use the toolbar menu to add rows and headers"
        >
            <TableToolbar>
                <TableToolbarContent>
                    <TableToolbarSearch onChange={action('onChange')} />
                </TableToolbarContent>
            </TableToolbar>
            <Table>
                <TableHead>
                    <TableHeader key="name">Name</TableHeader>
                    <TableHeader key="protocol">Protocol</TableHeader>
                    <TableHeader key="port">Port</TableHeader>
                    <TableHeader key="rule" align="left">
                        Rule
                    </TableHeader>
                    <TableHeader key="groups">Attached Groups</TableHeader>
                    <TableHeader key="status">Status</TableHeader>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.protocol}</TableCell>
                            <TableCell>{row.port}</TableCell>
                            <TableCell align="left">{row.rule}</TableCell>
                            <TableCell>{row.groups}</TableCell>
                            <TableCell>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </DataTable>
);

asChromaticStory(WithToolbar);
