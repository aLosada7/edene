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
    () => import('../../app/flightStatus/pages/FlightStatusPage')
);

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/form/signin/basic"
                        element={<AuthenticationSignInPage />}
                    />
                    <Route
                        path="/form/signin/modern"
                        element={<AuthenticationSignInPage />}
                    />

                    <Route
                        path="/templates/game-summary"
                        element={<ScoreboardPage />}
                    />
                    <Route
                        path="/templates/flight-status"
                        element={<FlightStatusPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};
