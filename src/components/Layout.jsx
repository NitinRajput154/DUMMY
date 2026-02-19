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

                {/* Page Content */}
                {/* <main className="flex-1 p-8 overflow-auto">
                    <svg
                        className="block w-full"
                        viewBox="0 0 1440 80"
                        xmlns="../assets/Rectanle"
                    >
                        <path
                            fill="url(#grad)"
                            d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z"
                        />
                        <defs>
                            <linearGradient id="grad" x1="0" x2="1">
                                <stop offset="0%" stopColor="#4D35F9" />
                                <stop offset="100%" stopColor="#6852EF" />
                            </linearGradient>
                        </defs>
                    </svg> */}
                <Outlet />
                {/* </main> */}
            </div>
        </div>
    );
};

export default Layout;
