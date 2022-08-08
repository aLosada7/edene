import { css } from '@emotion/react';

import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardSection,
} from '@edene/components';

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
        <CardSection
            cssOverrides={css`
                padding: 0;
                height: 100%;
            `}
        >
            <Table>
                <TableHead>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Pos.</TableHeader>
                    <TableHeader align="left">Name</TableHeader>
                    <TableHeader align="right">Points</TableHeader>
                    <TableHeader align="right">Assists</TableHeader>
                    <TableHeader align="right">Rebounds</TableHeader>
                    <TableHeader align="right">+/-</TableHeader>
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
                            <TableCell align="right">{player['+/-']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardSection>
    </Card>
);
