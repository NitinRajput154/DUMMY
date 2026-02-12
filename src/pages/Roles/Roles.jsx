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
            <div className="flex items-center bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg px-4 py-2 shadow-sm transition-colors">
                <Calendar className="w-4 h-4 text-secondary-500 mr-2" />
                <span className="text-sm font-medium text-secondary-800 dark:text-secondary-200">
                    23 May 2025 - 30 May 2025
                </span>
            </div>
            <button className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg p-2 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                <Filter className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
            </button>
            <button className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg p-2 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                <RefreshCw className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
            </button>
            <button className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg p-2 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                <LayoutGrid className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
            </button>
        </div>
    </div>
);

const RoleTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 overflow-hidden shadow-sm transition-colors">
            <div className="p-4 border-b border-secondary-100 dark:border-secondary-800 flex justify-between items-center bg-white dark:bg-secondary-900">
                <h2 className="text-base font-bold text-secondary-900 dark:text-secondary-100">Add Roles</h2>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-secondary-100 font-medium text-sm transition-colors">
                        Add
                    </button>
                    <button className="bg-white dark:bg-secondary-900 border border-secondary-100 dark:border-secondary-800 rounded-lg p-1.5 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                        <Plus className="w-4 h-4 text-secondary-500" strokeWidth={3} />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white dark:bg-secondary-900 border-b border-secondary-100 dark:border-secondary-800">
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800">Role</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800">Created On</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800">Updated On</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={`${item.id}-${index}`} className={`hover:bg-secondary-50/50 dark:hover:bg-secondary-800/50 transition-colors border-b border-secondary-50 dark:border-secondary-800 last:border-b-0`}>
                                <td className="px-6 py-4 text-sm text-secondary-800 dark:text-secondary-200 font-medium border-r border-secondary-50 dark:border-secondary-800">
                                    {item.role}
                                </td>
                                <td className="px-6 py-4 text-sm border-r border-secondary-50 dark:border-secondary-800">
                                    <span className="text-success font-medium">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-500 dark:text-secondary-400 font-medium border-r border-secondary-50 dark:border-secondary-800">
                                    {item.created}
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-500 dark:text-secondary-400 font-medium border-r border-secondary-50 dark:border-secondary-800">
                                    {item.updated}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <button className="text-secondary-400 dark:text-secondary-500 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button className="bg-cyan-50/50 dark:bg-cyan-900/20 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 text-[#00E5FF] px-4 py-1.5 rounded-lg text-sm font-bold transition-all border border-cyan-100/50 dark:border-cyan-900/40 flex items-center justify-center min-w-[100px] shadow-sm">
                                            Permission
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {currentData.length === 0 && (
                            <tr>
                                <td colSpan="5" className="px-6 py-10 text-center text-secondary-500 dark:text-secondary-400">
                                    No roles found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-secondary-100 dark:border-secondary-800 flex justify-end items-center bg-white dark:bg-secondary-900 transition-colors">
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className="p-2 text-secondary-400 dark:text-secondary-600 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronsLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 text-secondary-400 dark:text-secondary-600 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 rounded text-sm font-bold flex items-center justify-center transition-all ${currentPage === page
                                ? 'bg-primary text-white shadow-md'
                                : 'text-secondary-500 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
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
            <RoleTable data={roleData} />
        </div>
    );
};

export default Roles;
