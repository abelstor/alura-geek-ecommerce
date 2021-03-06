import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </Router>
    )
}