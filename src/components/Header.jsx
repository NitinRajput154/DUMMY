import { useState } from 'react';
import {
    Bell,
    Moon,
    Sun,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [searchFocus, setSearchFocus] = useState(false);

    return (
        <header className="bg-gradient-to-r from-primaryStart to-primaryEnd sticky top-0 z-40 transition-colors py-3 px-8 rounded-br-3xl">
            <div className="flex items-center justify-between gap-6">
                {/* Search Bar */}
                <div className="flex-1 max-w-sm">
                    <div className={`relative flex items-center bg-white rounded-full px-4 py-2 transition-all ${searchFocus ? 'ring-2 ring-white/20' : ''}`}>
                        <input
                            type="text"
                            placeholder="Search"
                            onFocus={() => setSearchFocus(true)}
                            onBlur={() => setSearchFocus(false)}
                            className="w-full bg-transparent border-none text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-0"
                        />
                        <span className="text-secondary-400 text-sm font-medium ml-2">⌘</span>
                    </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <div className="flex items-center bg-white rounded-full p-1 gap-1">
                        <button
                            onClick={() => !darkMode && toggleDarkMode()}
                            className={`p-1.5 rounded-full transition-all ${!darkMode ? 'bg-[#4D35F9] text-white' : 'text-secondary-400 hover:text-secondary-600'}`}
                            title="Light Mode"
                        >
                            <Sun className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => darkMode && toggleDarkMode()}
                            className={`p-1.5 rounded-full transition-all ${darkMode ? 'bg-[#4D35F9] text-white' : 'text-secondary-400 hover:text-secondary-600'}`}
                            title="Dark Mode"
                        >
                            <Moon className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-8 bg-white/20"></div>

                    {/* Notifications */}
                    <button className="relative bg-white p-2 rounded-lg group shadow-sm">
                        <Bell className="w-5 h-5 text-secondary-900" />
                        <span className="absolute -top-1 -right-1 bg-[#FF3D00] text-white text-[10px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center border-2 border-white">
                            10
                        </span>
                    </button>
                </div>
            </div>
            {/* <svg
                className="block w-full"
                viewBox="0 0 1440 80"
                xmlns="http://www.w3.org/2000/svg"
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
        </header>
    );
};

export default Header;
