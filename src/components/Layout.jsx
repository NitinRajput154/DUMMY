import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    return (
        <div className="flex min-h-screen bg-secondary-50 dark:bg-secondary-950 transition-colors">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header />

                <Outlet />


            </div>
        </div>
    );
};

export default Layout;
