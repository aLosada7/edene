import { InputHTMLAttributes, useState } from 'react';

import { Props } from '@edene/foundations';

import { Icon } from '../../icons';
import { Button } from '../Button';
import { TextInput } from '../../forms/TextInput';
import {
    tableToolbarSearch,
    tableToolbarSearchButton,
    tableToolbarSearchInput,
    tableToolbarSearchOpen,
} from './styles';

export interface TableToolbarSearchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>,
        Props {}

export const TableToolbarSearch = ({
    css,
    ...props
}: TableToolbarSearchProps) => {
    const [isSearchOpen, setSearchOpen] = useState(false);

    return (
        <div
            css={[
                tableToolbarSearch,
                isSearchOpen ? tableToolbarSearchOpen : null,
                css,
            ]}
            {...props}
        >
            {isSearchOpen ? (
                <TextInput
                    iconLeft="search"
                    css={tableToolbarSearchInput}
                ></TextInput>
            ) : null}
            {!isSearchOpen ? (
                <Button
                    css={tableToolbarSearchButton}
                    size="xsmall"
                    onClick={() => setSearchOpen(!isSearchOpen)}
                >
                    <Icon size="medium">search</Icon>
                </Button>
            ) : null}

            {/* <Select
                            css={tableToolbarSearchInput}
                            value="all"
                        >
                            <Option value="all">
                                <span>All</span>
                            </Option>
                            <Option value="name">
                                <span>Name</span>
                            </Option>
                            <Option value="protocol">
                                <span>Protocol</span>
                            </Option>
                            <Option value="port">
                                <span>Port</span>
                            </Option>
                            <Option value="rule">
                                <span>Rule</span>
                            </Option>
                            <Option value="groups">
                                <span>Attached Groups</span>
                            </Option>
                            <Option value="status">
                                <span>Status</span>
                            </Option>
                        </Select> */}
        </div>
    );
};
