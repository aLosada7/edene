import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthenticationSignInPage } from '../../app/authentication/signIn/pages/AuthenticationSignInPage';
import { Home } from '../../app/Home';
import Layout from './Layout';
import { ScoreboardPage } from '../../app/scoreboard/pages/ScoreboardPage';

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
                </Route>
            </Routes>
        </Router>
    );
};
