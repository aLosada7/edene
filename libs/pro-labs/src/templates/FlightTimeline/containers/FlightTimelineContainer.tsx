import { Card, CardSection, Container, Icon,Text } from '@edene/components';
import { grays, Theme, useTheme } from '@edene/foundations';
import { css } from '@emotion/react';

import { DateBadgeComponent } from '../components/DateBadgeComponent';
import { TimelineComponent } from '../components/TimelineComponent';

const list = css`
    list-style: none;
`;

const listItem = css`
    position: relative;
    padding: 1.75rem 0;
`;

const timelineItem = css`
    display: flex;
`;

const icon = css`
    width: 40px;
    min-width: 40px;
    height: 40px;

    border-radius: 50%;
    margin-right: 1rem;
    z-index: 1;

    background-color: rgb(148, 163, 184);
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const note = (theme: Theme) => css`
    margin-top: 1rem;
    background-color: ${theme.grays[6]};
    box-shadow: none;
`;

export const FlightTimelineContainer = () => {
    const { theme } = useTheme();

    return (
        <Container>
            <ol css={list}>
                <li css={listItem}>
                    <DateBadgeComponent date="Today" />
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>flight_land</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                The flight has landed at 3:50 PM
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jul 05, 3:52 PM
                            </Text>
                            <Card css={note(theme)}>
                                <CardSection>
                                    <Text type="regular" weight="bold">
                                        Thank you for traveling with EDENE
                                        Flights.
                                    </Text>
                                    <br />
                                    <Text type="regular">
                                        Thank you for choosing us as your
                                        trusted airline. We hope you have
                                        enjoyed travelling with{' '}
                                        <b>EDENE Flights</b>.
                                    </Text>
                                </CardSection>
                            </Card>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>flight_takeoff</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                The flight has taken off at 1:50 PM
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jul 05, 1:52 PM
                            </Text>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>flight</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                Last call for the passangers of flight DN-7243
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jul 05, 1:41 PM
                            </Text>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>airplane_ticket</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                Boarding is now allowed for all passangers
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jul 05, 11: 59 AM
                            </Text>
                        </div>
                    </div>
                </li>

                <li css={listItem}>
                    <DateBadgeComponent date="Yesterday" />
                </li>
                <li css={listItem}>
                    <TimelineComponent />
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>luggage</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                Early check-in is opened for everyone
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jul 04, 1:50 PM
                            </Text>
                        </div>
                    </div>
                </li>
                <li css={listItem}>
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>flight_class</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                Early check in is opened for Premium passengers
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jul 04, 1:50 AM
                            </Text>
                        </div>
                    </div>
                </li>

                <li css={listItem}>
                    <DateBadgeComponent date="15 days ago" />
                </li>
                <li css={listItem}>
                    <div css={timelineItem}>
                        <div css={icon}>
                            <Icon>schedule</Icon>
                        </div>
                        <div>
                            <Text type="regular">
                                The flight time has been reescheduled to Jul 05,
                                1:50
                            </Text>
                            <Text type="small" color={grays[3]}>
                                Jun 20, 8:24 AM
                            </Text>
                        </div>
                    </div>
                </li>
            </ol>
        </Container>
    );
};
