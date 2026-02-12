import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Roles from '../pages/Roles/Roles';
import Admin from '../pages/Admin/Admin';
import ComingSoon from '../pages/ComingSoon';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="role" element={<Roles />} />
                <Route path="admin" element={<Admin />} />
                <Route path="users/all" element={<ComingSoon />} />
                <Route path="users/active" element={<ComingSoon />} />
                <Route path="users/inactive" element={<ComingSoon />} />
                <Route path="content/posts" element={<ComingSoon />} />
                <Route path="content/pages" element={<ComingSoon />} />
                <Route path="coupons/all" element={<ComingSoon />} />
                <Route path="coupons/create" element={<ComingSoon />} />
                <Route path="operations/settings" element={<ComingSoon />} />
                <Route path="operations/logs" element={<ComingSoon />} />
                <Route path="reports/analytics" element={<ComingSoon />} />
                <Route path="reports/export" element={<ComingSoon />} />
                <Route path="support/tickets" element={<ComingSoon />} />
                <Route path="support/faq" element={<ComingSoon />} />
                <Route path="account/profile" element={<ComingSoon />} />
                <Route path="account/settings" element={<ComingSoon />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
