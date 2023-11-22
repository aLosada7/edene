import { lazy } from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import EducationPage from '../../app/dashboards/Education';
import Layout from './Layout';

const ReportPage = lazy(() => import('../../app/dashboards/Report'));
const UnlockSessionPage = lazy(
    () => import('../../app/pages/authentication/UnlockSession')
);
const SignInPage = lazy(() => import('../../app/pages/authentication/SignIn'));
const ScoreboardPage = lazy(() => import('../../app/applications/Scoreboard'));
const FlightTimelinePage = lazy(
    () => import('../../app/applications/FlightTimeline')
);
const ContractRegisterPage = lazy(
    () => import('../../app/applications/ContractRegister')
);
const MusicProductsPage = lazy(
    () => import('../../app/applications/MusicProducts')
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
                    <Route
                        path="/applications/music-products"
                        element={<MusicProductsPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};
