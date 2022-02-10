import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import { from } from '@dana';

import { GeneralForm } from '../../app/forms/GeneralForm';
import { Home } from '../../app/Home';
import { DanaComponents } from '../../app/dana-components/DanaComponents';
import { DataTableComponent } from '../../app/datatable/DataTableComponent';

const main = css`
    padding: 2rem;
    background: #fff;
    will-change: margin-left;
    background-color: #f1f5f9;
    min-height: 100vh;

    ${from.desktop} {
        margin-left: 16rem;
        margin-top: 3rem;
    }
`;

export interface RouterProps {
    children: React.ReactElement;
}

export default ({ children, ...props }: any) => {
    return (
        <BrowserRouter>
            <div css={main}>
                {children}
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/generalForm">
                        <GeneralForm />
                    </Route>
                    <Route path="/ui/dana-components">
                        <GeneralForm />
                    </Route>
                    <Route path="/ui/datatable">
                        <DataTableComponent />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};
