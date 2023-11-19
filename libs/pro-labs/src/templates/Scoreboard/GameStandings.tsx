import {
    Card,
    CardSection,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@edene/components';
import { css } from '@emotion/react';

import { rows } from './rows';

const GameStandings = () => (
    <Card
        css={css`
            padding: 0;
        `}
    >
        <CardSection
            css={css`
                padding: 0;
                height: 100%;
            `}
        >
            <Table>
                <TableHead>
                    <TableHeader key="#">#</TableHeader>
                    <TableHeader key="position">Pos.</TableHeader>
                    <TableHeader key="name" align="left">
                        Name
                    </TableHeader>
                    <TableHeader key="points" align="right">
                        Points
                    </TableHeader>
                    <TableHeader key="assist" align="right">
                        Assists
                    </TableHeader>
                    <TableHeader key="rebounds" align="right">
                        Rebounds
                    </TableHeader>
                    <TableHeader key="+-" align="right">
                        +/-
                    </TableHeader>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row['#']}</TableCell>
                            <TableCell>{row.position}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                            <TableCell align="right">{row.assists}</TableCell>
                            <TableCell align="right">{row.rebounds}</TableCell>
                            <TableCell align="right">{row['+/-']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardSection>
    </Card>
);

export default GameStandings;
