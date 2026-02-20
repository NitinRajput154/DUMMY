import React from 'react';
import { X } from 'lucide-react';

const AddRoleModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-[32px] w-full max-w-[500px] flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="bg-[#A594F9] px-8 py-5 flex justify-between items-center relative">
                    <h2 className="text-xl font-bold text-[#4D35F9]">
                        Role Add
                    </h2>
                    <button
                        onClick={onClose}
                        className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 text-white transition-all transform hover:rotate-90 shadow-sm"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/5" />
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-[17px] font-extrabold text-[#4D35F9] tracking-tight">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter role name"
                            className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#4D35F9]/10 transition-all placeholder:text-gray-300 shadow-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[17px] font-extrabold text-[#4D35F9] tracking-tight">
                            Status
                        </label>
                        <div className="relative">
                            <select
                                className="w-full appearance-none bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-700 focus:outline-none focus:ring-4 focus:ring-[#4D35F9]/10 transition-all cursor-pointer shadow-sm"
                            >
                                <option value="" disabled selected>Select status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-white flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-10 py-3.5 rounded-2xl text-[15px] font-black text-gray-600 bg-gray-100/80 hover:bg-gray-200 transition-all active:scale-95 shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-10 py-3.5 rounded-2xl text-[15px] font-black text-white bg-[#4D35F9] hover:bg-[#3D25E9] transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddRoleModal;
