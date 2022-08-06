import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Home } from '../../app/Home';
import Layout from './Layout';
const AuthenticationSignInPage = lazy(
    () =>
        import('../../app/authentication/signIn/pages/AuthenticationSignInPage')
);
const ScoreboardPage = lazy(
    () => import('../../app/scoreboard/pages/ScoreboardPage')
);
const FlightStatusPage = lazy(
    () => import('../../app/flightTimeline/pages/FlightTimelinePage')
);
const ContractRegisterPage = lazy(
    () => import('../../app/contractRegister/pages/ContractRegisterPage')
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
                        path="/applications/flight-status"
                        element={<FlightStatusPage />}
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
