import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { lazy } from 'react';

import { EducationPage } from '../../app/dashboards/education/pages/EducationPage';
import Layout from './Layout';
const ReportPage = lazy(
    () => import('../../app/dashboards/report/pages/ReportPage')
);
const UnlockSessionPage = lazy(
    () => import('../../app/pages/authentication/unlockSession/UnlockSession')
);
const SignInPage = lazy(
    () => import('../../app/pages/authentication/signIn/SignIn')
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
                    <Route
                        path="/"
                        element={<Navigate to="/dashboards/education" />}
                    />
                    <Route
                        path="/dashboards/education"
                        element={<EducationPage />}
                    />
                    <Route path="/dashboards/report" element={<ReportPage />} />

                    <Route path="/pages/signIn" element={<SignInPage />} />
                    <Route
                        path="/pages/unlockSession"
                        element={<UnlockSessionPage />}
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
