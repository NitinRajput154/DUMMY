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
            { label: 'All Users', path: '/users/all' },
            { label: 'Active Users', path: '/users/active' },
            { label: 'Inactive Users', path: '/users/inactive' }
        ]
    },
    {
        id: 'content',
        label: 'Content',
        icon: FileText,
        subItems: [
            { label: 'Posts', path: '/content/posts' },
            { label: 'Pages', path: '/content/pages' }
        ]
    },
    {
        id: 'coupons',
        label: 'Coupons',
        icon: Ticket,
        subItems: [
            { label: 'All Coupons', path: '/coupons/all' },
            { label: 'Create Coupon', path: '/coupons/create' }
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
        <aside className="w-[220px] bg-white border-r border-secondary-100 h-screen sticky top-0 flex flex-col overflow-y-auto scrollbar-hide">
            {/* Logo Section */}
            <div className="p-6 border-b border-secondary-100">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                    <div>
                        <h1 className="text-sm font-bold text-secondary-600">Suraksha EMI</h1>
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
                                            : 'text-secondary-700 hover:bg-secondary-50'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <div className="flex items-center gap-3">
                                                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-secondary-600 group-hover:text-secondary-900'}`} />
                                                <span>{item.label}</span>
                                            </div>
                                        </>
                                    )}
                                </NavLink>
                            ) : (
                                <>
                                    <button
                                        onClick={() => toggleExpand(item.id)}
                                        className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-secondary-700 hover:bg-secondary-50 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-secondary-600 group-hover:text-secondary-900" />
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
                                        <div className="bg-secondary-50/50">
                                            {item.subItems.map((subItem, index) => (
                                                <NavLink
                                                    key={index}
                                                    to={subItem.path}
                                                    className={({ isActive }) =>
                                                        `block px-6 pl-14 py-2.5 text-sm transition-colors ${isActive
                                                            ? 'text-primary font-medium bg-primary/5'
                                                            : 'text-secondary-600 hover:text-secondary-900 hover:bg-white'
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
