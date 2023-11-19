import { ChangeEvent, useState } from 'react';
import { Icon, Label } from '@edene/components';
import { css } from '@emotion/react';

// family: default || materialui

const mdTextBox = css`
    position: relative;

    > input {
        height: 56px;
        width: 260px;
        padding-left: 16px; // less because no icon
        border: 2px solid #888888;
        border-radius: 8px;
        outline: none;
        background: transparent;
        font-size: 16px;
    }

    > :is(label, span) {
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        pointer-events: none;
        color: #888888;
        transition: 0.3s;
    }

    > label {
        left: 10px;
        translate: 0 -50%;
        padding: 4px 8px;
    }

    > span {
        right: 16px;
        font-size: 28px;
    }

    > :is(input:focus, .has-value) {
        border-color: #8f44fd;
    }

    > :is(input:focus, .has-value) ~ label {
        translate: 0 -46px;
        background: white;
    }
`;

export const MaterialDesignTextBox = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div css={mdTextBox}>
            <input
                onChange={handleChange}
                className={`${value ? 'has-value' : ''}`}
                id="textbox"
                type="text"
            ></input>
            <Label text="Email address" />
        </div>
    );
};
