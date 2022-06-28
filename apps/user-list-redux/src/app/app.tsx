import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import { UserPage } from './user/pages/UserPage';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="users" element={<UserPage />} />
                <Route path="" element={<Navigate to="/users" />} />
            </Routes>
        </Router>
    );
}

export default App;
