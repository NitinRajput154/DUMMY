import {
    Calendar,
    RefreshCw,
    Filter,
    Search,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Eye
} from 'lucide-react';
import { useState } from 'react';

const INITIAL_DATA = [
    {
        id: "Dist2",
        name: "Aisha",
        address: "Sector 7 noida",
        username: "ai",
        email: "ai123@gmail.com",
        password: "Ai123",
        number: "9876543210",
        couponsUsed: 7541,
        couponsTotal: 100,
        status: "Active",
        createdDate: "2026-02-16",
        createdTime: "12:33:24",
    },
    {
        id: "Dist3",
        name: "Ravi",
        address: "Sector 12 noida",
        username: "ravi123",
        email: "ravi123@gmail.com",
        password: "Ravi123",
        number: "9876543211",
        couponsUsed: 8590,
        couponsTotal: 100,
        status: "Active",
        createdDate: "2026-02-17",
        createdTime: "09:45:00",
    },
    {
        id: "Dist4",
        name: "Priya",
        address: "Sector 15 noida",
        username: "priya22",
        email: "priya22@gmail.com",
        password: "Priya22",
        number: "9876543212",
        couponsUsed: 9200,
        couponsTotal: 100,
        status: "Active",
        createdDate: "2026-02-18",
        createdTime: "08:20:45",
    },
    {
        id: "Dist5",
        name: "Anil",
        address: "Sector 16 noida",
        username: "anil19",
        email: "anil19@gmail.com",
        password: "Anil19",
        number: "9876543213",
        couponsUsed: 7845,
        couponsTotal: 100,
        status: "Inactive",
        createdDate: "2026-02-19",
        createdTime: "14:10:12",
    },
];

const FilterDropdown = ({ label, placeholder }) => (
    <div className="flex flex-col gap-1 min-w-[120px]">
        <label className="text-xs font-semibold text-gray-700">{label}</label>
        <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all cursor-pointer pr-8">
                <option value="">{placeholder}</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

const TSM = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [search, setSearch] = useState('');

    const filtered = INITIAL_DATA.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.number.includes(search)
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filtered.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 space-y-4 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-extrabold text-purple-600">TSM</h1>
                <div className="flex gap-2 items-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm">
                        Add
                    </button>
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700">23 May 2025 - 30 May 2025</span>
                    </div>
                    <button className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        Export
                    </button>
                    <button className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors shadow-sm">
                        <RefreshCw className="w-4 h-4 text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-end gap-4">
                <FilterDropdown label="Status" placeholder="Status" />
                <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                    <div className="h-[19px]" />
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all shadow-sm placeholder-gray-400"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Card Header */}
                <div className="bg-[#A594F9] px-5 py-4 flex justify-between items-center">
                    <h2 className="text-base font-bold text-purple-700">TSM list</h2>
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
                                {["Business info", "Login info", "Number", "Coupons count", "Status", "Created date", "Action"].map((h, i) => (
                                    <th key={i} className={`px-4 py-3 text-sm font-bold text-gray-800 bg-white ${i < 6 ? 'border-r border-gray-100' : ''} text-left`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr
                                    key={`${row.id}-${index}`}
                                    className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors"
                                >
                                    {/* Business info */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <InfoRow label="Sl no" value={row.id} />
                                            <InfoRow label="Name" value={row.name} />
                                            <InfoRow label="Address" value={row.address} />
                                        </div>
                                    </td>

                                    {/* Login info */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <InfoRow label="Username" value={row.username} />
                                            <InfoRow label="Email" value={row.email} />
                                            <InfoRow label="Password" value={row.password} />
                                        </div>
                                    </td>

                                    {/* Number */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="text-sm font-medium text-gray-800">{row.number}</div>
                                    </td>

                                    {/* Coupons count */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <div className="text-sm font-bold text-gray-800">
                                                {row.couponsUsed} / {row.couponsTotal}
                                            </div>
                                            <button className="text-gray-400 text-xs flex items-center gap-1 hover:text-purple-600 transition-colors font-bold">
                                                <Eye className="w-3 h-3" />
                                                Show History
                                            </button>
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                                            {row.status}
                                        </span>
                                    </td>

                                    {/* Created date */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <div className="text-sm font-bold text-gray-800">{row.createdDate}</div>
                                            <div className="text-xs text-gray-400">{row.createdTime}</div>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex gap-2">
                                                <button className="text-xs font-bold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                                                    Edit
                                                </button>
                                                <button className="text-xs font-bold px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                                                    Seller
                                                </button>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="text-xs font-bold px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                                                    Add Seller
                                                </button>
                                                <button className="text-xs font-bold px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors whitespace-nowrap">
                                                    Return to Distributor
                                                </button>
                                            </div>
                                            <button className="text-xs font-bold px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors w-fit">
                                                Assign Coupon
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
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

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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

const InfoRow = ({ label, value, muted }) => (
    <p className="text-xs text-left">
        <span className="font-bold text-gray-800">{label} : </span>
        <span className={`font-medium ${muted ? 'text-gray-400' : 'text-gray-600'}`}>{value}</span>
    </p>
);

const PagBtn = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
        {children}
    </button>
);

export default TSM;
