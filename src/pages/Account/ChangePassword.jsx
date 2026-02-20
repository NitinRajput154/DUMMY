import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

/**
 * ChangePassword Component
 * Implements the password update form as per the design.
 */
function ChangePassword() {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password change logic here
        console.log("Submitting password change...", { newPassword, repeatPassword });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans">
            {/* Main Card */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-indigo-100 shadow-lg">
                        <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Change Password</h1>
                </div>

                {/* Card Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* New Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors"
                                >
                                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Repeat Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Repeat Password</label>
                            <div className="relative">
                                <input
                                    type={showRepeatPassword ? "text" : "password"}
                                    placeholder="Repeat new password"
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors"
                                >
                                    {showRepeatPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Requirements Box */}
                    <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-6 space-y-3">
                        <h3 className="text-[13px] font-bold text-gray-800">Password Requirements:</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-[13px] text-gray-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                At least 6 characters long
                            </li>
                            <li className="flex items-center gap-3 text-[13px] text-gray-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                Both passwords match
                            </li>
                        </ul>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-indigo-100 shadow-lg active:scale-95"
                        >
                            Submit form
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-400">
                2025 © Copyright <a href="#" className="text-indigo-600 font-medium hover:underline">Suraksha Pvt Ltd</a>
            </div>
        </div>
    );
}

export default ChangePassword;
