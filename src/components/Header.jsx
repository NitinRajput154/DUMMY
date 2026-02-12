import { useState } from 'react';
import {
    Search,
    Bell,
    MessageSquare,
    Moon,
    Sun,
    Plus,
    User
} from 'lucide-react';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchFocus, setSearchFocus] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Add dark mode logic here
    };

    return (
        <header className="bg-white border-b border-secondary-100 sticky top-0 z-40">
            <div className="flex items-center justify-between px-8 py-4">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                    <div className={`relative transition-all ${searchFocus ? 'scale-[1.02]' : ''}`}>
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            onFocus={() => setSearchFocus(true)}
                            onBlur={() => setSearchFocus(false)}
                            className="w-full pl-11 pr-4 py-2.5 bg-secondary-50 border border-secondary-100 rounded-lg text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:bg-white transition-all"
                        />
                        {searchFocus && (
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-secondary-500 hover:text-secondary-700 font-medium">
                                ESC
                            </button>
                        )}
                    </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-3 ml-6">
                    {/* Add Button */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors shadow-sm">
                        <Plus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add New</span>
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg hover:bg-secondary-50 transition-colors relative group"
                        title={darkMode ? 'Light Mode' : 'Dark Mode'}
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-secondary-600" />
                        ) : (
                            <Moon className="w-5 h-5 text-secondary-600" />
                        )}
                    </button>

                    {/* Notifications */}
                    <button className="p-2 rounded-lg hover:bg-secondary-50 transition-colors relative group">
                        <Bell className="w-5 h-5 text-secondary-600" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
                        <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            3
                        </span>
                    </button>

                    {/* Messages */}
                    <button className="p-2 rounded-lg hover:bg-secondary-50 transition-colors relative group">
                        <MessageSquare className="w-5 h-5 text-secondary-600" />
                        <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            5
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="w-px h-6 bg-secondary-200"></div>

                    {/* User Profile */}
                    <button className="flex items-center gap-3 pl-3 pr-4 py-2 rounded-lg hover:bg-secondary-50 transition-colors group">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                            <User className="w-5 h-5" />
                        </div>
                        <div className="hidden lg:block text-left">
                            <p className="text-sm font-semibold text-secondary-900">Admin User</p>
                            <p className="text-xs text-secondary-500">Administrator</p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
