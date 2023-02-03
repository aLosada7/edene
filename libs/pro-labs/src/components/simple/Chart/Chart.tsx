import { Button, Heading } from '@edene/components';
import { Theme } from '@edene/foundations';
import { useState } from 'react';
import ApexChart from 'react-apexcharts';

import { card, chart, header } from './styles';

const colorDefault = '#e1e4f2';

const defaultOptions = {
    chart: {
        toolbar: { show: false },
        animtions: {
            speed: 750,
            dynamicAnimation: { enabled: true, speed: 350 },
        },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.4,
            opacityTo: 0,
            shadeIntensity: 0.2,
        },
    },
};

const options = (theme: Theme) => {
    return {
        ...defaultOptions,
        colors: [theme.color, colorDefault],
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.08)',
            padding: { left: -10, right: 0, top: -16, bottom: -8 },
            xaxis: { lines: { show: false } },
            yaxis: { lines: { show: false } },
        },
        yaxis: { labels: { show: false } },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
    };
};

const daily = [{ data: [35, 55, 41, 74, 30, 58] }];

const weekly = [{ data: [55, 41, 74, 30, 58] }];

const buttons = ['Daily', 'Weekly'];

const ToggleButtons = ({ setSeries, setActiveButton, activeButton }: any) => {
    const handleClick = (stat: any) => {
        setSeries(stat === 'Daily' ? daily : weekly);
        setActiveButton(stat);
    };

    return (
        <nav>
            {buttons.map((button) => (
                <Button
                    key={button}
                    variant="link"
                    color={colorDefault}
                    className={button === activeButton ? 'active' : ''}
                    onClick={() => handleClick(button)}
                >
                    {button}
                </Button>
            ))}
        </nav>
    );
};

const Chart = ({ theme }: { theme: Theme }) => {
    const [series, setSeries] = useState(daily);
    const [activeButton, setActiveButton] = useState('Daily');

    return (
        <div css={card}>
            <header css={header(theme)}>
                <Heading size="h3" color={colorDefault}>
                    Revenue
                </Heading>
                <ToggleButtons
                    setSeries={setSeries}
                    setActiveButton={setActiveButton}
                    activeButton={activeButton}
                />
            </header>
            <div css={chart}>
                <ApexChart
                    options={options(theme)}
                    series={series}
                    type="area"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default Chart;
