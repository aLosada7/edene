import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@edene/components';

import { headers, results } from './mocks';

const MusicProducts = () => (
    <Container pv={6}>
        <Table selection rows={results}>
            <TableHead>
                {headers.map((header) => (
                    <TableHeader
                        key={header.id}
                        {...(header.align && { align: header.align })}
                    >
                        {header.title}
                    </TableHeader>
                ))}
            </TableHead>
            <TableBody>
                {results.map((row) => (
                    <TableRow key={row.id} id={row.id}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.artist}</TableCell>
                        <TableCell>{row.publication_date.toString()}</TableCell>
                        <TableCell align="right">{row.copies_sold}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Container>
);

export default MusicProducts;
