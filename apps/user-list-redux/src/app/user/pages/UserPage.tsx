import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ActionButton, Row } from '@dana-components';
import { MaterialIcon } from '@dana';

import UserListContainer from '../containers/UserListContainer';

export const UserPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({ mode: 'list' });
    }, []);

    return (
        <>
            <Row>
                <ActionButton onClick={() => setSearchParams({ mode: 'list' })}>
                    <MaterialIcon>list</MaterialIcon>
                </ActionButton>
                <ActionButton
                    onClick={() => setSearchParams({ mode: 'table' })}
                >
                    <MaterialIcon>table</MaterialIcon>
                </ActionButton>
            </Row>
            <UserListContainer mode={searchParams.get('mode')} />
        </>
    );
};
