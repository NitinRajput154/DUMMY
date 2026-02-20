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
import SuperDistributor from '../pages/Users/SuperDistributor';
import Distributor from '../pages/Users/Distributor';
import TSM from '../pages/Users/TSM';
import Sellers from '../pages/Users/Sellers';
import PlaylistVideo from '../pages/Content/PlaylistVideo';
import PlaylistCategory from '../pages/Content/PlaylistCategory';
import Login from '../pages/Login';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import CNFPage from '../pages/CNF';
import CompanyList from '../pages/CompanyList';
import Location from '../pages/Location/Location';
import Financer from '../pages/Financer/Financer';
import AppList from '../pages/Content/AppList';
import Settings from '../pages/Settings/Settings';
import Analytics from '../pages/Reports/Analytics';
import Contact from '../pages/Support/Contact';
import ChangePassword from '../pages/Account/ChangePassword';
import Logout from '../pages/Logout';

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
                <Route path="users/sellers" element={<Sellers />} />
                <Route path="users/tsm" element={<TSM />} />
                <Route path="users/distributor" element={<Distributor />} />
                <Route path="users/superdistributor" element={<SuperDistributor />} />
                <Route path="users/cnf" element={<CNFPage />} />
                <Route path="content/banners" element={<Banners />} />
                <Route path="content/playlist/video" element={<PlaylistVideo />} />
                <Route path="content/playlist/category" element={<PlaylistCategory />} />
                <Route path="content/app-listings" element={<AppList />} />
                <Route path="coupons/catalogs" element={<Catalogs />} />
                <Route path="coupons/allocation" element={<Allocation />} />
                <Route path="operations/settings" element={<Settings />} />
                <Route path="operations/logs" element={<ComingSoon />} />
                <Route path="reports/analytics" element={<Analytics />} />
                <Route path="reports/export" element={<ComingSoon />} />
                <Route path="support/tickets" element={<ComingSoon />} />
                <Route path="support/faq" element={<ComingSoon />} />
                <Route path="support/contact" element={<Contact />} />
                <Route path="account/profile" element={<ComingSoon />} />
                <Route path="account/settings" element={<ComingSoon />} />
                <Route path="account/change-password" element={<ChangePassword />} />
                <Route path="location" element={<Location />} />
                <Route path="financer/list" element={<Financer />} />
                <Route path="companylist" element={<CompanyList />} />
                <Route path='/logout' element={<Logout />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
