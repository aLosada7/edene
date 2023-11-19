import { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Radio,
    RadioGroup,
    TextInput,
} from '@edene/components';

import { optionWrapper } from './styles';

const PaymentForm = () => {
    const [value, setValue] = useState('1');
    return (
        <Container>
            <Box py={4}>
                <Heading type="h5">Secure Payment</Heading>
            </Box>
            <RadioGroup onChange={setValue} value={value}>
                <div css={optionWrapper}>
                    <Radio value="1">Credit or debit card</Radio>
                    <Box py={2}>
                        <TextInput
                            placeholder="Card Number"
                            iconLeft="credit_card"
                        />
                        <TextInput placeholder="Card holder name" />
                    </Box>
                </div>
                <div css={optionWrapper}>
                    <Radio value="2">$17/month with Affirt</Radio>
                </div>
                <div css={optionWrapper}>
                    <Radio value="3">Solana Pay</Radio>
                </div>
            </RadioGroup>
        </Container>
    );
};

export default PaymentForm;
