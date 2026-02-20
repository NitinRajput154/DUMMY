import React from 'react';
import { X } from 'lucide-react';

const PERMISSIONS_DATA = [
    {
        category: 'Admin',
        permissions: ['Admin View']
    },
    {
        category: 'App',
        permissions: ['App View']
    },
    {
        category: 'Coupon',
        permissions: ['Coupon View']
    },
    {
        category: 'Location',
        permissions: ['Location View']
    },
    {
        category: 'User',
        permissions: ['User View', 'User Edit', 'User Lock', 'User Unlock', 'User Device', 'User Info']
    },
    {
        category: 'Super Distributor',
        permissions: ['Super distributor View', 'Add Super distributor', 'Action Super distributor']
    },
    {
        category: 'Distributor',
        permissions: ['Distributor View', 'Add Distributor', 'Action Distributor']
    },
    {
        category: 'Playlist',
        permissions: ['Playlist View']
    },
    {
        category: 'Report',
        permissions: ['Report View']
    },
    {
        category: 'Seller',
        permissions: ['Seller View', 'Edit', 'Assign Coupon', 'Return Coupon', 'Seller Info', 'Coupon Notary']
    },
    {
        category: 'Setting',
        permissions: ['Setting View']
    },
    {
        category: 'Financier',
        permissions: ['Financier View']
    },
    {
        category: 'Banner',
        permissions: ['Banner View']
    }
];

const PermissionsModal = ({ role, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative z-20 animate-in fade-in zoom-in duration-300 border-2 border-[#A594F9]">

                {/* Header */}
                <div className="bg-[#A594F9] px-8 py-5 flex justify-between items-center shrink-0">
                    <h2 className="text-xl font-bold text-white">
                        Permissions - {role?.role || 'Admin'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:opacity-80 transition-all transform hover:rotate-90 p-1"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-8 overflow-y-auto bg-gray-50/50 flex-1 custom-scrollbar scroll-smooth">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                        {PERMISSIONS_DATA.map((group, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-purple-200 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2.5 mb-5 border-b border-gray-50 pb-3">
                                    <div className="w-1 h-5 bg-[#A594F9] rounded-full" />
                                    <h3 className="text-base font-bold text-gray-800 tracking-tight">
                                        {group.category}
                                    </h3>
                                </div>
                                <div className="space-y-3">
                                    {group.permissions.map((perm, pIdx) => (
                                        <label
                                            key={pIdx}
                                            className="group flex items-center gap-3 cursor-pointer select-none"
                                        >
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 bg-white transition-all checked:border-[#A594F9] checked:bg-[#A594F9] focus:outline-none focus:ring-2 focus:ring-[#A594F9]/20"
                                                />
                                                <svg
                                                    className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors">
                                                {perm}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-5 bg-white border-t border-gray-100 flex justify-end gap-3 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-10 py-2.5 rounded-lg text-sm font-bold text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all active:scale-95"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-10 py-2.5 rounded-lg text-sm font-bold text-white bg-[#A594F9] hover:bg-purple-600 transition-all shadow-lg shadow-purple-100 active:scale-95"
                    >
                        Save
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #F1F5F9;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #CBD5E1;
                    border-radius: 10px;
                    border: 2px solid #F1F5F9;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #A594F9;
                }
            `}} />
        </div>
    );
};

export default PermissionsModal;
