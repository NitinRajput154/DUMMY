import {
    Calendar,
    RefreshCw,
    Filter,
    Plus,
    Edit2,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import PermissionsModal from './PermissionsModal';
import AddRoleModal from './AddRoleModal';

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

const RoleHeader = ({ onAddClick }) => (
    <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2xl font-extrabold text-purple-600">Roles</h1>
        <div className="flex gap-2 items-center">
            <button
                onClick={onAddClick}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-6 py-2 rounded-lg transition-colors shadow-sm active:scale-95"
            >
                Add
            </button>
            <button className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors shadow-sm active:scale-95">
                <RefreshCw className="w-4 h-4 text-gray-500" />
            </button>
        </div>
    </div>
);

const RoleTable = ({ data, onPermissionClick }) => {
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
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            {/* Card Header */}
            <div className="bg-[#A594F9] px-6 py-4 flex justify-between items-center">
                <h2 className="text-base font-bold text-purple-700">Roles List</h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Show entities</span>
                    <div className="relative">
                        <select
                            value={itemsPerPage}
                            onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                            className="appearance-none bg-purple-600 text-white border-0 rounded-lg px-3 py-1.5 pr-8 text-sm font-semibold focus:outline-none cursor-pointer"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                            {["Role Name", "Status", "Created On", "Updated On", "Action"].map((h, i) => (
                                <th
                                    key={i}
                                    className={`px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider ${i < 4 ? 'border-r border-gray-100' : ''}`}
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr
                                key={`${item.id}-${index}`}
                                className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors group"
                            >
                                <td className="px-6 py-4 text-sm text-gray-800 font-bold border-r border-gray-50">
                                    {item.role}
                                </td>
                                <td className="px-6 py-4 text-sm border-r border-gray-50">
                                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-medium border-r border-gray-50 whitespace-nowrap">
                                    {item.created}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 font-medium border-r border-gray-50 whitespace-nowrap">
                                    {item.updated}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <button className="text-gray-400 hover:text-purple-600 transition-colors p-1 hover:bg-purple-50 rounded-lg">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onPermissionClick(item)}
                                            className="bg-[#B3E5FC] hover:bg-[#81D4FA] text-[#0277BD] px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all shadow-sm active:scale-95"
                                        >
                                            Permission
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex justify-end items-center border-t border-gray-100">
                <div className="flex items-center gap-1">
                    <PagBtn onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                        <ChevronsLeft className="w-4 h-4" />
                    </PagBtn>
                    <PagBtn onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <ChevronLeft className="w-4 h-4" />
                    </PagBtn>

                    <button className="w-8 h-8 rounded text-sm font-semibold text-gray-400 flex items-center justify-center">0</button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center transition-all ${currentPage === page
                                ? 'bg-purple-600 text-white shadow-md'
                                : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <PagBtn onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <ChevronRight className="w-4 h-4" />
                    </PagBtn>
                    <PagBtn onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                        <ChevronsRight className="w-4 h-4" />
                    </PagBtn>
                </div>
            </div>
        </div>
    );
};

const PagBtn = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-purple-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
    >
        {children}
    </button>
);

const Roles = () => {
    const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
    const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);

    const handlePermissionClick = (role) => {
        setSelectedRole(role);
        setIsPermissionModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 space-y-4 font-sans">
            <RoleHeader onAddClick={() => setIsAddRoleModalOpen(true)} />
            <RoleTable data={roleData} onPermissionClick={handlePermissionClick} />

            <PermissionsModal
                isOpen={isPermissionModalOpen}
                onClose={() => setIsPermissionModalOpen(false)}
                role={selectedRole}
            />

            <AddRoleModal
                isOpen={isAddRoleModalOpen}
                onClose={() => setIsAddRoleModalOpen(false)}
            />
        </div>
    );
};

export default Roles;
