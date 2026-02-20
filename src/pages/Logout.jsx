import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

/**
 * Logout Component
 * Displays a confirmation dialog before logging out the user.
 */
const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-gray-50/50 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Indigo Header Section */}
                <div className="bg-[#5D5CFF] px-8 py-10 flex items-center gap-6 relative">
                    {/* Logout Icon Circle */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <LogOut className="w-8 h-8 text-[#5D5CFF]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-1">Confirm Logout</h1>
                        <p className="text-white/80 text-lg">You're about to leave</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-8 py-12 text-center">
                    <p className="text-xl font-medium text-gray-700 mb-10">
                        Are you sure you want to logout?
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={handleCancel}
                            className="flex-1 px-8 py-4 border border-gray-200 rounded-2xl text-lg font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex-1 px-8 py-4 bg-[#5D5CFF] rounded-2xl text-lg font-bold text-white hover:bg-[#4D4BFF] transition-all active:scale-95 shadow-lg shadow-indigo-100"
                        >
                            Yes, Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logout;
