import { css } from '@emotion/react';

import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardBody,
} from '@dana';

import { players } from '../data/players';
import { Player } from '../types/Player';

export const TeamStandingsComponent = () => (
    <Card
        cssOverrides={css`
            width: 100%;
            width: -webkit-fill-available;
            margin: 1rem;
        `}
    >
        <CardBody
            cssOverrides={css`
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
                    <TableHeader key="+-">+/-</TableHeader>
                </TableHead>
                <TableBody>
                    {players.map((player: Player, index) => (
                        <TableRow key={index}>
                            <TableCell>{player['#']}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell align="left">{player.name}</TableCell>
                            <TableCell align="right">{player.points}</TableCell>
                            <TableCell align="right">
                                {player.assists}
                            </TableCell>
                            <TableCell align="right">
                                {player.rebounds}
                            </TableCell>
                            <TableCell>{player['+/-']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardBody>
    </Card>
);
