import {
    Container,
    DanaTheme,
    grays,
    Tab,
    Tabs,
    Title,
    Text,
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardBody,
} from '@dana';
import { css } from '@emotion/react';
import { rows } from './rows';
import { theme } from './theme';

export default {
    title: 'DanaLabs',
    decorators: [
        (Story: any) => (
            <DanaTheme theme={theme}>
                <section style={{ backgroundColor: grays[7] }}>
                    <Title size="h3" mb={2}>
                        Game Summary
                    </Title>
                    <Story />
                </section>
            </DanaTheme>
        ),
    ],
};

const GameStandings = () => (
    <Card
        cssOverrides={css`
            margin: 1rem;
        `}
    >
        <CardBody
            cssOverrides={css`
                padding: 0;
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
                    <TableHeader key="rebounds">+/-</TableHeader>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell>{row['#']}</TableCell>
                            <TableCell>{row.position}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                            <TableCell align="right">{row.assists}</TableCell>
                            <TableCell align="right">{row.rebounds}</TableCell>
                            <TableCell>{row['+/-']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardBody>
    </Card>
);

export const GameSummary = () => (
    <Tabs>
        <Tab id="tab-1" label="🇨🇦 Canada">
            <GameStandings />
        </Tab>
        <Tab id="tab-2" label="🇺🇸 United States">
            <GameStandings />
        </Tab>
    </Tabs>
);
