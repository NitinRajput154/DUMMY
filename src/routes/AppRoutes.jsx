import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import ComingSoon from '../pages/ComingSoon';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="role" element={<ComingSoon />} />
                <Route path="admin" element={<ComingSoon />} />
                <Route path="users" element={<ComingSoon />} />
                <Route path="content" element={<ComingSoon />} />
                <Route path="coupons" element={<ComingSoon />} />
                <Route path="operations" element={<ComingSoon />} />
                <Route path="reports" element={<ComingSoon />} />
                <Route path="support" element={<ComingSoon />} />
                <Route path="account" element={<ComingSoon />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
