import {
    Calendar,
    RefreshCw,
    Filter,
    LayoutGrid,
    Edit3,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronDown,
    Search,
    Download,
    SlidersHorizontal,
    Edit2,
    X
} from 'lucide-react';
import { useState } from 'react';
import AdminAddModal from './components/AddModal';

const adminData = [
    { id: 1, name: 'Rahul Sharma', role: 'Seller', email: 'rahul.sharma@example.com', number: '0000000000', status: 'Active' },
    { id: 2, name: 'Priya Verma', role: 'Seller', email: 'priya.verma@example.com', number: '1111111111', status: 'Inactive' },
    { id: 3, name: 'Anil Gupta', role: 'Super admin', email: 'anil.gupta@example.com', number: '2222222222', status: 'Active' },
    { id: 4, name: 'Sneha Patel', role: 'Seller', email: 'sneha.patel@example.com', number: '3333333333', status: 'Pending' },
    { id: 5, name: 'Vikram Singh', role: 'Seller', email: 'vikram.singh@example.com', number: '4444444444', status: 'Active' },
    { id: 6, name: 'Aisha Patel', role: 'Seller', email: 'aisha.patel@example.com', number: '5555555555', status: 'Inactive' },
    { id: 7, name: 'John Doe', role: 'Seller', email: 'john.doe@example.com', number: '6666666666', status: 'Active' },
    { id: 8, name: 'Maria Garcia', role: 'Seller', email: 'maria.garcia@example.com', number: '7777777777', status: 'Active' },
    { id: 9, name: 'Chen Wei', role: 'Seller', email: 'chen.wei@example.com', number: '8888888888', status: 'Inactive' },
    { id: 10, name: 'Fatima Khan', role: 'Seller', email: 'fatima.khan@example.com', number: '9999999999', status: 'Active' },
    { id: 11, name: 'Liam O\'Connor', role: 'Seller', email: 'liam.oconnor@example.com', number: '1010101010', status: 'Inactive' },
    { id: 12, name: 'Sofia Rossi', role: 'Seller', email: 'sofia.rossi@example.com', number: '2020202020', status: 'Active' },
];



const AdminHeader = ({ onAdd }) => (
    <div className="flex flex-col gap-6 mb-8 px-8 pt-8 text-[#4D35F9]">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Admin</h1>
            <div className="flex gap-3 items-center">
                <button
                    onClick={onAdd}
                    className="bg-[#4D35F9] text-white px-8 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-opacity-90 transition-all"
                >
                    Add
                </button>
                <button className="bg-white border border-secondary-200 text-secondary-700 px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-secondary-50 transition-all flex items-center gap-2">
                    Export
                </button>
                <button className="bg-white border border-secondary-200 rounded-lg p-2 flex items-center justify-center shadow-sm hover:bg-secondary-50 transition-colors">
                    <RefreshCw className="w-4 h-4 text-secondary-600" />
                </button>
            </div>
        </div>

        <div className="flex justify-between items-center bg-transparent">
            <div className="relative w-72">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-white border border-secondary-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4D35F9]"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
            </div>

            <div className="flex gap-3 items-center">
                <div className="flex items-center bg-white border border-secondary-100 rounded-lg px-4 py-2 shadow-sm transition-colors">
                    <Calendar className="w-4 h-4 text-[#4D35F9] mr-3" />
                    <span className="text-sm font-bold text-secondary-800">
                        23 May 2025 - 30 May 2025
                    </span>
                </div>
                <button className="bg-white border border-secondary-100 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                    <SlidersHorizontal className="w-4 h-4 text-secondary-600" />
                </button>
            </div>
        </div>
    </div>
);

const AdminTable = ({ data }) => {
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

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }

    return (
        <div className="bg-white dark:bg-secondary-900 rounded-3xl border border-secondary-100 dark:border-secondary-800 overflow-hidden shadow-sm transition-colors mx-8 mb-8">
            <div className="bg-[#A594F9] px-8 py-5 flex justify-between items-center">
                <h2 className="text-base font-bold text-[#4D35F9]">Admin</h2>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-secondary-900">Show entities</span>
                    <div className="relative">
                        <select
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="appearance-none bg-white border-none rounded-full px-6 py-1.5 pr-10 text-xs text-secondary-800 font-bold focus:outline-none cursor-pointer transition-colors"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white dark:bg-secondary-900 border-b border-secondary-200">
                            <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Name</th>
                            <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Role Name</th>
                            <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Email id</th>
                            <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Number</th>
                            <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-100">Status</th>
                            <th className="px-8 py-4 text-left text-sm font-bold text-secondary-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={`${item.id}-${index}`} className="hover:bg-secondary-50/30 transition-colors border-b border-secondary-100 last:border-b-0">
                                <td className="px-8 py-4 text-sm text-secondary-800 font-medium border-r border-secondary-100">
                                    {item.name}
                                </td>
                                <td className="px-8 py-4 text-sm text-secondary-700 border-r border-secondary-100">
                                    {item.role}
                                </td>
                                <td className="px-8 py-4 text-sm text-secondary-600 border-r border-secondary-100">
                                    {item.email}
                                </td>
                                <td className="px-8 py-4 text-sm text-secondary-600 border-r border-secondary-100">
                                    {item.number}
                                </td>
                                <td className="px-8 py-4 text-sm border-r border-secondary-100">
                                    <span className={`font-bold ${item.status === 'Active' ? 'text-[#00C853]' :
                                        item.status === 'Pending' ? 'text-orange-500' :
                                            'text-secondary-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-8 py-4">
                                    <button className="flex items-center gap-1.5 text-secondary-600 hover:text-secondary-900 transition-colors text-sm font-bold group">
                                        <Edit2 className="w-4 h-4 text-secondary-400" />
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
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

const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex-1 p-0 relative">
            <AdminHeader onAdd={() => setIsModalOpen(true)} />
            <AdminTable data={adminData} />

            <AdminAddModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Admin;
