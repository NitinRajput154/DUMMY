import React from 'react';
import { X } from 'lucide-react';

const HISTORY_DATA = [
    { date: '2026-02-12 12:38:27', count: 50, type: 'Add', closing: '3098 Return' },
    { date: '2026-02-12 12:36:43', count: 50, type: 'Transfer-RAHUL COMMUNICATION', closing: '3048 Foc' },
    { date: '2026-02-10 13:24:15', count: 106, type: 'Add', closing: '3098' },
    { date: '2026-01-29 21:16:47', count: 174, type: 'Add', closing: '2992 Add By Radhaswami' },
    { date: '2026-01-22 14:10:12', count: 174, type: 'Transfer-RADHASWAMI', closing: '2818 FOC WITH DIFFRANCI AMOUNT' },
    { date: '2026-01-15 12:14:41', count: 1000, type: 'Add', closing: '2992' },
    { date: '2025-12-29 09:47:40', count: 200, type: 'Add', closing: '1992 By mistake' },
    { date: '2025-12-29 09:46:26', count: 200, type: 'Transfer-RAHUL COMMUNICATION', closing: '1792' },
    { date: '2025-12-23 15:11:01', count: 100, type: 'Return', closing: '1992' },
    { date: '2025-12-23 14:31:07', count: 500, type: 'Return', closing: '2092' },
];

const CouponHistoryModal = ({ isOpen, onClose, distributorName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            {/* Backdrop with higher blur for "premium" feel */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-500"
                onClick={onClose}
            />

            {/* Modal Container - Slide in from right for smoother across-screen feel */}
            <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in slide-in-from-right-8 duration-500 ease-out">

                {/* Header */}
                <div className="px-10 py-8 flex justify-between items-center bg-white">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Coupon History - <span className="text-purple-600">{distributorName}</span>
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-gray-600 transform hover:rotate-90"
                    >
                        <X className="w-7 h-7" />
                    </button>
                </div>

                {/* Table Content */}
                <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Count</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">Closing</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {HISTORY_DATA.map((row, idx) => (
                                <tr key={idx} className="hover:bg-purple-50/30 transition-colors group">
                                    <td className="px-6 py-5 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                                        {row.date}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                                        {row.count}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                                        {row.type}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-medium text-gray-500 group-hover:text-gray-800 transition-colors">
                                        {row.closing}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #E2E8F0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #A594F9;
                }
            `}} />
        </div>
    );
};

export default CouponHistoryModal;
