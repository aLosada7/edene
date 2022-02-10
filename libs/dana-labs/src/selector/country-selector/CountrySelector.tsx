import { Container, Select, Option } from '@dana';

const getFlagEmoji = (countryCode: any) => {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char: any) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};

export function CountrySelector() {
    return (
        <Container>
            <Select label="Country">
                <Option value="canada">
                    <span>{getFlagEmoji('CA')} Canada</span>
                </Option>
                <Option value="usa">
                    <span>{getFlagEmoji('us')} United States</span>
                </Option>
                <Option value="newzeland">
                    <span>{getFlagEmoji('nz')} New Zeland</span>
                </Option>
            </Select>
        </Container>
    );
}

export default CountrySelector;
