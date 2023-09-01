import { css } from '@emotion/react';
import { useState } from 'react';

import {
    Tab,
    Tabs,
    Heading,
    Row,
    Col,
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardSection,
    Text,
    CardHeader,
    Avatar,
    Box,
    Container,
} from '@edene/components';
import { ThemeProvider } from '@edene/foundations';

import { rows } from './rows';
import { theme } from './theme';

export default {
    title: 'Templates',
    decorators: [
        (Story: any) => (
            <ThemeProvider theme={theme}>
                <Container>
                    <Box mb={2}>
                        <Heading size="h3">Game Summary</Heading>
                    </Box>
                    <Story />
                </Container>
            </ThemeProvider>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

const TeamStats = () => (
    <Card
        css={css`
            text-align: left;
        `}
    >
        <CardHeader>TEAM STATS</CardHeader>
        <CardSection>
            <Row py={1}>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">PTS</Text>
                    <Text weight="bold">55</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">AST</Text>
                    <Text weight="bold">12</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">REB</Text>
                    <Text weight="bold">22</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">% T3</Text>
                    <Text weight="bold">55%</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">STL</Text>
                    <Text weight="bold">5</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">BLK</Text>
                    <Text weight="bold">3</Text>
                </Col>
            </Row>
        </CardSection>
    </Card>
);

const Scoring = () => (
    <Card
        css={css`
            text-align: left;
        `}
    >
        <CardHeader>SCORING</CardHeader>
        <CardSection>
            <Row align="space-around-center" py={1}>
                <Avatar size={100} shape="circle" />
                <Row direction="column" px={2}>
                    <Text weight="bold">Danial Berry</Text>
                    <Text size="xsmall" weight="bold">
                        Jason Chapman, Jake Sullivan
                    </Text>
                    <Text size="xsmall" weight="bold">
                        11:20 / 1st
                    </Text>
                </Row>
            </Row>
        </CardSection>
    </Card>
);

const GameStandings = () => (
    <Card>
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
                        <TableRow>
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

const TeamSummary = () => (
    <Row noGlutters>
        <Col md={8} direction="column" gap={4}>
            <TeamStats />
            <Scoring />
        </Col>
        <Col md={16}>
            <GameStandings />
        </Col>
    </Row>
);

export const GameSummary = () => {
    const [teamSelected, setTeamSelected] = useState('canada');

    const onChange = (tabKey: string) => {
        setTeamSelected(tabKey);
    };
    return (
        <Tabs active={teamSelected} onTabChange={onChange}>
            <Tab tabKey="canada" label="🇨🇦 Canada">
                <TeamSummary />
            </Tab>
            <Tab tabKey="eeuu" label="🇺🇸 United States">
                <TeamSummary />
            </Tab>
        </Tabs>
    );
};
