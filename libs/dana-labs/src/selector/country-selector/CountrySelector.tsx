import { Select, Option } from '@dana';
import { css } from '@emotion/react';

const getFlagEmoji = (countryCode: any) => {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char: any) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};

const marginRight = css`
    margin-right: 6px;
`;

export function CountrySelector() {
    return (
        <Select label="Country">
            <Option value="canada">
                <span css={marginRight}>{getFlagEmoji('CA')}</span>Canada
            </Option>
            <Option value="usa">
                <span css={marginRight}>{getFlagEmoji('us')}</span>United States
            </Option>
            <Option value="newzeland">
                <span css={marginRight}>{getFlagEmoji('nz')}</span>New Zeland
            </Option>
        </Select>
    );
}

export default CountrySelector;
