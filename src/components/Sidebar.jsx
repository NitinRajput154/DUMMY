import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    UserCircle,
    ShieldCheck,
    Users,
    FileText,
    Settings,
    Ticket,
    HelpCircle,
    ChevronDown,
    ChevronRight
} from 'lucide-react';
import logo from '../assets/logo.png';

const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/', active: true },

    { id: 'admin', label: 'Admin', icon: ShieldCheck, path: '/admin' },

    { id: 'role', label: 'Role', icon: UserCircle, path: '/role' },

    // Users → flattened
    { id: 'customers', label: 'Customers', icon: Users, path: '/users/customers' },
    { id: 'cnf', label: 'CNF', icon: Users, path: '/users/cnf' },
    { id: 'superDistributor', label: 'Super Distributor', icon: Users, path: '/users/superdistributor' },
    { id: 'distributor', label: 'Distributor', icon: Users, path: '/users/distributor' },
    { id: 'tsm', label: 'TSM', icon: Users, path: '/users/tsm' },
    { id: 'seller', label: 'Seller', icon: Users, path: '/users/sellers' },

    // Content
    { id: 'banner', label: 'Banner', icon: FileText, path: '/content/banners' },
    {
        id: 'playlist',
        label: 'Play List',
        icon: FileText,
        subItems: [
            { id: 'playlistVideo', label: 'Video', path: '/content/playlist/video' },
            { id: 'playlistCategory', label: 'Category', path: '/content/playlist/category' },
        ],
    },
    { id: 'appList', label: 'App List', icon: FileText, path: '/content/app-listings' },

    // Company / Location / Finance
    { id: 'companyList', label: 'Company list', icon: FileText, path: '/companylist' },
    { id: 'couponList', label: 'Coupon list', icon: Ticket, path: '/coupons/catalogs' },
    { id: 'location', label: 'Location', icon: FileText, path: '/location' },
    { id: 'financerList', label: 'Financer list', icon: FileText, path: '/financer/list' },

    // Operations
    { id: 'setting', label: 'Setting', icon: Settings, path: '/operations/settings' },

    // Reports
    { id: 'report', label: 'Report', icon: FileText, path: '/reports/analytics' },

    // Account actions
    { id: 'changePassword', label: 'Change password', icon: FileText, path: '/account/change-password' },
    { id: 'contact', label: 'Contact', icon: FileText, path: '/support/contact' },
    { id: 'logout', label: 'Logout', icon: FileText, path: '/logout' }
];

const Sidebar = () => {
    const [expandedItems, setExpandedItems] = useState({ playlist: true });
    const location = useLocation();

    const toggleExpand = (itemId) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    return (
        <aside className="w-[220px] bg-white dark:bg-secondary-900 border-r border-secondary-100 dark:border-secondary-800 h-screen sticky top-0 flex flex-col overflow-y-auto scrollbar-hide transition-colors">
            {/* Logo Section */}
            <div className="p-6 border-secondary-100 dark:border-secondary-800">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-20 h-20" />
                    <div>
                        <h1 className="text-sm font-bold text-secondary-600 dark:text-secondary-300">Suraksha EMI</h1>
                        <p className="text-xs text-secondary-400">Locker</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 py-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const isExpanded = expandedItems[item.id];
                    const isSubActive = hasSubItems && item.subItems.some(sub => location.pathname === sub.path);

                    /* ── Expandable parent (Play List) ── */
                    if (hasSubItems) {
                        return (
                            <div key={item.id} className="mb-1">
                                <button
                                    onClick={() => toggleExpand(item.id)}
                                    className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-all group
                                        ${isSubActive
                                            ? 'bg-gradient-to-r from-[#4D35F9] to-[#6852EF] text-white rounded-full'
                                            : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className={`w-5 h-5 ${isSubActive ? 'text-white' : 'text-secondary-600 dark:text-secondary-400'}`} />
                                        <span>{item.label}</span>
                                    </div>
                                    {isExpanded
                                        ? <ChevronDown className={`w-4 h-4 ${isSubActive ? 'text-white' : 'text-secondary-400'}`} />
                                        : <ChevronRight className={`w-4 h-4 ${isSubActive ? 'text-white' : 'text-secondary-400'}`} />
                                    }
                                </button>

                                {isExpanded && (
                                    <div className="ml-8 mt-1 space-y-0.5">
                                        {item.subItems.map((sub) => {
                                            const isActive = location.pathname === sub.path;
                                            return (
                                                <NavLink
                                                    key={sub.id}
                                                    to={sub.path}
                                                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all
                                                        ${isActive ? 'text-purple-600 font-semibold' : 'text-secondary-500 hover:text-secondary-800 dark:text-secondary-400 dark:hover:text-secondary-200'}`}
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-purple-600' : 'bg-secondary-400'}`} />
                                                    {sub.label}
                                                </NavLink>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    /* ── Regular flat item ── */
                    return (
                        <div key={item.id} className="mb-1">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center justify-between px-6 py-3 text-sm font-medium transition-all group 
                                        ${isActive ? 'bg-gradient-to-r from-[#4D35F9] to-[#6852EF] text-white rounded-full' : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 rounded-lg'}`
                                }
                            >
                                {({ isActive }) => (
                                    <div className="flex items-center gap-3">
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-secondary-100'}`} />
                                        <span>{item.label}</span>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;
