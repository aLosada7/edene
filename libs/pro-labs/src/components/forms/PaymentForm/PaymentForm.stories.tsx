import { Meta } from '@storybook/react';

import PaymentFormComponent from './PaymentForm';

export default {
    title: 'Components/Forms',
    component: PaymentFormComponent,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

export const PaymentForm = <PaymentFormComponent />;
