import { Icon, Label } from '@edene/components';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

// family: default || materialui

const addTextBox = css`
    position: relative;

    > .underline {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #0fa5a2;
        transform: scaleX(0);
        transition: 0.35s;
    }

    > span,
    > label {
        position: absolute;
        pointer-events: none;
        color: rgba(0, 0, 0, 0.5);
        transition: 0.35s;
    }

    > span {
        top: 30%;
        left: 0;
    }

    > label {
        top: 30%;
        left: 34px;
    }

    > input {
        height: 36px;
        width: 220px;
        padding-left: 34px; // start writing
        border: 0;
        border-bottom: 2px solid #2e2a33;
        background: transparent;
        color: rgba(0, 0, 0, 0.96);
    }

    > :is(input:focus, input.has-value) ~ span {
        color: rgba(0, 0, 0, 0.96);
    }

    > :is(input:focus, input.has-value) ~ label {
        color: #0fa5a2;
    }

    > :is(input:focus, input.has-value) ~ label {
        translate: -42px -44px;
        scale: 0.875;
    }

    > :is(input:focus, input.has-value) ~ .underline {
        transform: scaleX(1);
    }
`;

export const AntDesignTextbox = () => {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div css={addTextBox}>
            <input
                onChange={handleChange}
                className={`${value ? 'has-value' : ''}`}
                id="textbox"
                type="text"
            ></input>
            <Icon>mail</Icon>
            <Label text="Email address" />
            <div className="underline"></div>
        </div>
    );
};
