import { COMPONENT_COLORS } from '@edene/foundations';
import { Story } from '@storybook/react';

import { Icon } from '../../icons';
import { Row } from '../../layout/Grid';
import { Alert, AlertProps } from './index';

export default {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        type: {
            options: ['brand', ...COMPONENT_COLORS],
            control: { type: 'radio' },
        },
    },
};

export const Playground: Story<
    AlertProps & {
        content: string;
    }
> = ({ content, ...args }) => <Alert {...args}>{content}</Alert>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    type: 'brand',
    content: 'An important alert',
};

export const Default = () => <Alert>This is a default alert</Alert>;

export const Types = () => (
    <Row direction="column" gap={4}>
        <Alert>This is a default alert</Alert>
        <Alert type="success">This is a success alert</Alert>
        <Alert type="info">This is a danger alert</Alert>
        <Alert type="danger">This is a danger alert</Alert>
    </Row>
);

export const WithActions = () => (
    <Alert
        actions={
            <Icon variant="outlined" color="brand">
                add_box
            </Icon>
        }
    >
        Now add any course to your library
    </Alert>
);
