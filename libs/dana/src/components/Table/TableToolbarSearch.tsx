import { SearchIcon } from '@dana-icons';
import React, { InputHTMLAttributes, useState } from 'react';
import { Props } from '../../helpers';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
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
    cssOverrides,
}: TableToolbarSearchProps) => {
    const [isSearchOpen, setSearchOpen] = useState(false);
    return (
        <div
            css={[
                tableToolbarSearch,
                isSearchOpen ? tableToolbarSearchOpen : null,
                cssOverrides,
            ]}
        >
            {isSearchOpen ? (
                <TextInput
                    leftIcon="search"
                    cssOverrides={tableToolbarSearchInput}
                ></TextInput>
            ) : null}
            {!isSearchOpen ? (
                <Button
                    cssOverrides={tableToolbarSearchButton}
                    size="xsmall"
                    onClick={() => setSearchOpen(!isSearchOpen)}
                >
                    <SearchIcon size="medium" />
                </Button>
            ) : null}
            {/* <Select
                            cssOverrides={tableToolbarSearchInput}
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
