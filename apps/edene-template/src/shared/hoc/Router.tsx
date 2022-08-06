import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Home } from '../../app/Home';
import Layout from './Layout';
const AuthenticationSignInPage = lazy(
    () =>
        import(
            '../../app/pages/authentication/signIn/pages/AuthenticationSignInPage'
        )
);
const ScoreboardPage = lazy(
    () => import('../../app/applications/scoreboard/pages/ScoreboardPage')
);
const FlightTimelinePage = lazy(
    () =>
        import('../../app/applications/flightTimeline/pages/FlightTimelinePage')
);
const ContractRegisterPage = lazy(
    () =>
        import(
            '../../app/applications/contractRegister/pages/ContractRegisterPage'
        )
);

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/pages/signin/classic"
                        element={<AuthenticationSignInPage />}
                    />

                    <Route
                        path="/applications/game-summary"
                        element={<ScoreboardPage />}
                    />
                    <Route
                        path="/applications/flight-timeline"
                        element={<FlightTimelinePage />}
                    />
                    <Route
                        path="/applications/contract-register"
                        element={<ContractRegisterPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};
