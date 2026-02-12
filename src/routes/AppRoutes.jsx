import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Roles from '../pages/Roles/Roles';
import Admin from '../pages/Admin/Admin';
import Customers from '../pages/Users/Customers';
import Banners from '../pages/Content/Banners';
import Catalogs from '../pages/Coupons/Catalogs';
import Allocation from '../pages/Coupons/Allocation';
import ComingSoon from '../pages/ComingSoon';
import Login from '../pages/Login';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />

            <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
                <Route index element={<Dashboard />} />
                <Route path="role" element={<Roles />} />
                <Route path="admin" element={<Admin />} />
                <Route path="users/customers" element={<Customers />} />
                <Route path="users/sellers" element={<ComingSoon />} />
                <Route path="users/tsm" element={<ComingSoon />} />
                <Route path="users/superdistributor" element={<ComingSoon />} />
                <Route path="users/cnf" element={<ComingSoon />} />
                <Route path="content/banners" element={<Banners />} />
                <Route path="content/playlist" element={<ComingSoon />} />
                <Route path="content/app-listings" element={<ComingSoon />} />
                <Route path="coupons/catalogs" element={<Catalogs />} />
                <Route path="coupons/allocation" element={<Allocation />} />
                <Route path="operations/settings" element={<ComingSoon />} />
                <Route path="operations/logs" element={<ComingSoon />} />
                <Route path="reports/analytics" element={<ComingSoon />} />
                <Route path="reports/export" element={<ComingSoon />} />
                <Route path="support/tickets" element={<ComingSoon />} />
                <Route path="support/faq" element={<ComingSoon />} />
                <Route path="account/profile" element={<ComingSoon />} />
                <Route path="account/settings" element={<ComingSoon />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
