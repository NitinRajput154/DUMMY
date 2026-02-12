import {
    Calendar,
    RefreshCw,
    Filter,
    Plus,
    Edit2,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    LayoutGrid
} from 'lucide-react';
import { useState } from 'react';

const roleData = [
    { id: 1, role: 'Admin', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 2, role: 'Super distributor', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 3, role: 'Distributos', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 4, role: 'TSM', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 5, role: 'Seller', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 6, role: 'Support', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 7, role: 'Reporting manager', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
    { id: 8, role: 'CNF', status: 'Active', created: 'Jan 1, 2026 | 03:56:86 PM', updated: 'Jan 12, 2026 | 03:56:86 PM' },
];

const RoleHeader = () => (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-primary">Roles</h1>
        <div className="flex gap-2 items-center">
            <div className="flex items-center bg-white border border-secondary-200 rounded-lg px-4 py-2 shadow-sm">
                <Calendar className="w-4 h-4 text-secondary-500 mr-2" />
                <span className="text-sm font-medium text-secondary-800">
                    23 May 2025 - 30 May 2025
                </span>
            </div>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4 text-secondary-600" />
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                <RefreshCw className="w-4 h-4 text-secondary-600" />
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                <LayoutGrid className="w-4 h-4 text-secondary-600" />
            </button>
        </div>
    </div>
);

const RoleTable = () => {
    return (
        <div className="bg-white rounded-2xl border border-secondary-100 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-secondary-100 flex justify-between items-center bg-white">
                <h2 className="text-base font-bold text-secondary-900">Add Roles</h2>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-secondary-700 hover:text-secondary-900 font-medium text-sm transition-colors">
                        Add
                    </button>
                    <button className="bg-white border border-secondary-100 rounded-lg p-1.5 hover:bg-secondary-50 transition-colors shadow-sm">
                        <Plus className="w-4 h-4 text-secondary-500" strokeWidth={3} />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white border-b border-secondary-100">
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Role</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Created On</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Updated On</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roleData.map((item, index) => (
                            <tr key={item.id} className={`hover:bg-secondary-50/50 transition-colors border-b border-secondary-50 last:border-b-0`}>
                                <td className="px-6 py-4 text-sm text-secondary-800 font-medium border-r border-secondary-50">
                                    {item.role}
                                </td>
                                <td className="px-6 py-4 text-sm border-r border-secondary-50">
                                    <span className="text-success font-medium">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-500 font-medium border-r border-secondary-50">
                                    {item.created}
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-500 font-medium border-r border-secondary-50">
                                    {item.updated}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <button className="text-secondary-400 hover:text-secondary-700 transition-colors">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button className="bg-cyan-50/50 hover:bg-cyan-100 text-[#00E5FF] px-4 py-1.5 rounded-lg text-sm font-bold transition-all border border-cyan-100/50 flex items-center justify-center min-w-[100px] shadow-sm">
                                            Permission
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-secondary-100 flex justify-end items-center bg-white">
                <div className="flex items-center gap-1">
                    <button className="p-2 text-secondary-400 hover:text-secondary-900 disabled:opacity-0 transition-colors">
                        <ChevronsLeft className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-secondary-400 hover:text-secondary-900 disabled:opacity-0 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 transition-colors">
                        0
                    </button>
                    <button className="w-8 h-8 rounded bg-primary text-white text-sm font-bold flex items-center justify-center transition-all shadow-md">
                        1
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 transition-colors">
                        2
                    </button>
                    <button className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors">
                        <ChevronsRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Roles = () => {
    return (
        <div className="flex-1 p-0">
            <RoleHeader />
            <RoleTable />
        </div>
    );
};

export default Roles;
