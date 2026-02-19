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
    <div className="flex justify-between items-center mb-8 px-8 pt-8">
        <h1 className="text-2xl font-bold text-[#4D35F9]">Roles</h1>
        <div className="flex gap-3 items-center">
            <button className="bg-[#4D35F9] text-white px-8 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-opacity-90 transition-all">
                Add
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 flex items-center justify-center shadow-sm hover:bg-secondary-50 transition-colors">
                <RefreshCw className="w-4 h-4 text-secondary-600" />
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
        <div className="bg-white dark:bg-secondary-900 rounded-3xl border border-secondary-100 dark:border-secondary-800 overflow-hidden shadow-sm transition-colors mx-8 mb-8">
            <div className="bg-[#A594F9] px-8 py-5 flex justify-between items-center">
                <h2 className="text-base font-bold text-[#4D35F9]">Add Roles</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <thead>
                            <tr className="bg-white dark:bg-secondary-900 border-b border-secondary-200">
                                <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Role</th>
                                <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Status</th>
                                <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Created On</th>
                                <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Updated On</th>
                                <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900">Action</th>
                            </tr>
                        </thead>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={`${item.id}-${index}`} className="hover:bg-secondary-50/30 transition-colors border-b border-secondary-100 last:border-b-0">
                                <td className="px-8 py-4 text-sm text-secondary-800 font-medium border-r border-secondary-100">
                                    {item.role}
                                </td>
                                <td className="px-8 py-4 text-sm border-r border-secondary-100">
                                    <span className="text-[#00C853] font-bold">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-8 py-4 text-sm text-secondary-600 font-medium border-r border-secondary-100">
                                    {item.created}
                                </td>
                                <td className="px-8 py-4 text-sm text-secondary-600 font-medium border-r border-secondary-100">
                                    {item.updated}
                                </td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-4">
                                        <button className="text-secondary-500 hover:text-secondary-800 transition-colors">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button className="bg-[#B3E5FC] hover:bg-opacity-80 text-[#0288D1] px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center min-w-[110px] shadow-sm">
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

            <div className="p-6 flex justify-end items-center bg-white border-t border-secondary-100">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-1 text-secondary-800 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-4 mx-2">
                        <span className="text-sm font-bold text-secondary-400">0</span>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-full text-base font-bold flex items-center justify-center transition-all ${currentPage === page
                                    ? 'bg-[#4D35F9] text-white shadow-lg'
                                    : 'text-secondary-500 hover:text-[#4D35F9]'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-1 text-secondary-800 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="p-1 text-secondary-800 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <ChevronsRight className="w-6 h-6" />
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
