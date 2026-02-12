import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        path: '/',
        active: true
    },
    {
        id: 'role',
        label: 'Role',
        icon: UserCircle,
        path: '/role'
    },
    {
        id: 'admin',
        label: 'Admin',
        icon: ShieldCheck,
        path: '/admin'
    },
    {
        id: 'users',
        label: 'Users',
        icon: Users,
        subItems: [
            { label: 'Customers', path: '/users/customers' },
            { label: 'Sellers', path: '/users/sellers' },
            { label: 'TSM', path: '/users/tsm' },
            { label: 'Super Distributor', path: '/users/superdistributor' },
            { label: 'CNF', path: '/users/cnf' },
        ]
    },
    {
        id: 'content',
        label: 'Content',
        icon: FileText,
        subItems: [
            { label: 'Banners', path: '/content/banners' },
            { label: 'Playlist', path: '/content/playlist' },
            { label: 'App Listings', path: '/content/app-listings' }
        ]
    },
    {
        id: 'coupons',
        label: 'Coupons',
        icon: Ticket,
        subItems: [
            { label: 'Coupon Catalogs', path: '/coupons/catalogs' },
            { label: 'Coupon Allocation', path: '/coupons/allocation' }
        ]
    },
    {
        id: 'operations',
        label: 'Operations',
        icon: Settings,
        subItems: [
            { label: 'Settings', path: '/operations/settings' },
            { label: 'Logs', path: '/operations/logs' }
        ]
    },
    {
        id: 'reports',
        label: 'Reports',
        icon: FileText,
        subItems: [
            { label: 'Analytics', path: '/reports/analytics' },
            { label: 'Export', path: '/reports/export' }
        ]
    },
    {
        id: 'support',
        label: 'Support',
        icon: HelpCircle,
        subItems: [
            { label: 'Tickets', path: '/support/tickets' },
            { label: 'FAQ', path: '/support/faq' }
        ]
    },
    {
        id: 'account',
        label: 'Account',
        icon: UserCircle,
        subItems: [
            { label: 'Profile', path: '/account/profile' },
            { label: 'Settings', path: '/account/settings' }
        ]
    }
];

const Sidebar = () => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (itemId) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    return (
        <aside className="w-[220px] bg-white dark:bg-secondary-900 border-r border-secondary-100 dark:border-secondary-800 h-screen sticky top-0 flex flex-col overflow-y-auto scrollbar-hide transition-colors">
            {/* Logo Section */}
            <div className="p-6 border-b border-secondary-100 dark:border-secondary-800">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
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
                    const isExpanded = expandedItems[item.id];
                    const hasSubItems = item.subItems && item.subItems.length > 0;

                    return (
                        <div key={item.id} className="mb-1">
                            {/* Main Menu Item */}
                            {item.path && !hasSubItems ? (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center justify-between px-6 py-3 text-sm font-medium transition-all group ${isActive
                                            ? 'bg-primary text-white'
                                            : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className="flex items-center gap-3">
                                                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-secondary-100'}`} />
                                                <span>{item.label}</span>
                                            </div>
                                        </>
                                    )}
                                </NavLink>
                            ) : (
                                <>
                                    <button
                                        onClick={() => toggleExpand(item.id)}
                                        className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-secondary-100" />
                                            <span>{item.label}</span>
                                        </div>
                                        {hasSubItems && (
                                            isExpanded ? (
                                                <ChevronDown className="w-4 h-4 text-secondary-500" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-secondary-500" />
                                            )
                                        )}
                                    </button>

                                    {/* Sub Menu Items */}
                                    {hasSubItems && isExpanded && (
                                        <div className="bg-secondary-50/50 dark:bg-secondary-800/50">
                                            {item.subItems.map((subItem, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={subItem.path}
                                                    className={({ isActive }) =>
                                                        `block px-6 pl-14 py-2.5 text-sm transition-colors ${isActive
                                                            ? 'text-primary font-medium bg-primary/5 dark:bg-primary/10'
                                                            : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 hover:bg-white dark:hover:bg-secondary-800'
                                                        }`
                                                    }
                                                >
                                                    {subItem.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;
