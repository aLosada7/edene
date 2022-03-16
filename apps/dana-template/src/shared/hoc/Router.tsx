import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import { from } from '@dana';

import { GeneralForm } from '../../app/forms/GeneralForm';
import { Home } from '../../app/Home';
import Layout from './Layout';
import { GameSummaryTemplate } from '../../app/templates/GameSummaryTemplate';

export interface RouterProps {
    children: React.ReactElement;
}

export default ({ children, ...props }: any) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/generalForm" element={<GeneralForm />} />

                    <Route
                        path="/templates/game-summary"
                        element={<GameSummaryTemplate />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};
