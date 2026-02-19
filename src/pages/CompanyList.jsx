import {
    Calendar,
    Search,
    ChevronDown,
    Edit3,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Filter,
    RefreshCw
} from 'lucide-react';
import { useState } from 'react';

const companyData = [
    {
        id: 1,
        name: 'Sumit singh',
        email: 'suraksha@gmail.com',
        number: '+91 5959595959',
        status: 'Active',
        couponCount: '45000/25600',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        email: 'priya.sharma@gmail.com',
        number: '+91 9876543210',
        status: 'Active',
        couponCount: '12000/8000',
    },
    {
        id: 3,
        name: 'Rajan Mehta',
        email: 'rajan.mehta@gmail.com',
        number: '+91 8765432109',
        status: 'Inactive',
        couponCount: '3200/1500',
    },
];

const PagBtn = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
        {children}
    </button>
);

const CompanyList = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filtered = companyData.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.email.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const currentData = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            {/* Top Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-extrabold text-purple-600">Company list</h1>
                <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700">23 May 2025 - 30 May 2025</span>
                    </div>
                    <button className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors shadow-sm">
                        <RefreshCw className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        Export
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-4">
                <div className="relative w-48">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all shadow-sm placeholder-gray-400"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Purple Header */}
                <div className="bg-purple-100 px-5 py-4 flex justify-between items-center">
                    <h2 className="text-base font-bold text-purple-700">Company Coupons</h2>
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
                            <tr className="border-b border-gray-100">
                                {["Name", "Email id", "Number", "Status", "Coupon count", "Action"].map((h, i) => (
                                    <th key={i} className="px-5 py-3 text-left text-sm font-bold text-gray-800 border-r last:border-r-0 border-gray-100">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.length > 0 ? currentData.map((row) => (
                                <tr key={row.id} className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors">
                                    <td className="px-5 py-4 text-sm text-gray-700 border-r border-gray-50">{row.name}</td>
                                    <td className="px-5 py-4 text-sm text-gray-700 border-r border-gray-50">{row.email}</td>
                                    <td className="px-5 py-4 text-sm text-gray-700 border-r border-gray-50">{row.number}</td>
                                    <td className="px-5 py-4 text-sm border-r border-gray-50">
                                        <span className={row.status === 'Active' ? 'text-green-500 font-medium' : 'text-gray-400 font-medium'}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-sm text-gray-700 border-r border-gray-50">{row.couponCount}</td>
                                    <td className="px-5 py-4">
                                        <button className="inline-flex items-center gap-1.5 text-gray-500 hover:text-purple-600 transition-colors group">
                                            <Edit3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-semibold">Edit</span>
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400">No results found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-5 py-3 flex justify-end items-center border-t border-gray-100">
                    <div className="flex items-center gap-1">
                        <PagBtn onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                            <ChevronsLeft className="w-4 h-4" />
                        </PagBtn>
                        <PagBtn onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            <ChevronLeft className="w-4 h-4" />
                        </PagBtn>

                        <button className="w-8 h-8 rounded text-sm font-semibold text-gray-400 flex items-center justify-center">
                            0
                        </button>

                        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 rounded text-sm font-bold flex items-center justify-center transition-all ${currentPage === page
                                        ? 'bg-purple-600 text-white shadow-sm'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
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
        </div>
    );
};

export default CompanyList;