import {
    Container,
    DanaTheme,
    grays,
    Tab,
    Tabs,
    Title,
    Row,
    Col,
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardBody,
    Text,
    CardHeader,
    Avatar,
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

const TeamStats = () => (
    <Card
        cssOverrides={css`
            margin: 1rem;
            text-align: left;
        `}
    >
        <CardHeader>TEAM STATS</CardHeader>
        <CardBody>
            <Row py={1}>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">PTS</Text>
                    <Text weight="bold">55</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">AST</Text>
                    <Text weight="bold">12</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">REB</Text>
                    <Text weight="bold">22</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">% T3</Text>
                    <Text weight="bold">55%</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">STL</Text>
                    <Text weight="bold">5</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">BLK</Text>
                    <Text weight="bold">3</Text>
                </Col>
            </Row>
        </CardBody>
    </Card>
);

const Scoring = () => (
    <Card
        cssOverrides={css`
            margin: 1rem;
            text-align: left;
        `}
    >
        <CardHeader>SCORING</CardHeader>
        <CardBody>
            <Row py={1}>
                <Col lg={8} direction="column" align="center">
                    <Avatar shape="circle" />
                </Col>
                <Col lg={16} direction="column">
                    <Row direction="column" px={2}>
                        <Text weight="bold">Danial Berry</Text>
                        <Text size="xsm" weight="bold">
                            Jason Chapman, Jake Sullivan
                        </Text>
                        <Text size="xsm" weight="bold">
                            11:20 / 1st
                        </Text>
                    </Row>
                </Col>
            </Row>
        </CardBody>
    </Card>
);

const GameStandings = () => (
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

const TeamStandings = () => (
    <Container>
        <Row>
            <Col md={8} direction="column">
                <TeamStats />
                <Scoring />
            </Col>
            <Col md={16}>
                <GameStandings />
            </Col>
        </Row>
    </Container>
);

export const GameSummary = () => (
    <Tabs>
        <Tab id="tab-1" label="🇨🇦 Canada">
            <TeamStandings />
        </Tab>
        <Tab id="tab-2" label="🇺🇸 United States">
            <TeamStandings />
        </Tab>
    </Tabs>
);
