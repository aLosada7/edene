import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import {
    Container,
    Heading,
    RadioGroup,
    RadioGroupProps,
    Radio,
    TextInput,
} from '@edene/components';

import { optionWrapper, onlyRadio } from './styles';

export default {
    title: 'Components/Forms',
} as Meta;

const Template: Story<RadioGroupProps> = (props: RadioGroupProps) => {
    const [value, setValue] = useState('1');
    return (
        <Container>
            <Heading size="h5" mt={4} mb={4}>
                Secure Payment
            </Heading>
            <RadioGroup onChange={setValue} value={value} {...props}>
                <div css={optionWrapper}>
                    <Radio value="1">Credit or debit card</Radio>
                    <TextInput
                        placeholder="Card Number"
                        iconLeft="credit_card"
                    />
                    <TextInput placeholder="Card holder name" />
                </div>
                <div css={optionWrapper}>
                    <Radio value="2" cssLabel={onlyRadio}>
                        $17/month with Affirt
                    </Radio>
                </div>
                <div css={optionWrapper}>
                    <Radio value="3" cssLabel={onlyRadio}>
                        Solana Pay
                    </Radio>
                </div>
            </RadioGroup>
        </Container>
    );
};

export const PaymentForm = Template.bind({});
