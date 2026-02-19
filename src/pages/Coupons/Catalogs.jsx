import {
    Calendar,
    RefreshCw,
    Filter,
    Search,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight
} from 'lucide-react';
import { useState } from 'react';

const catalogData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    sr: i + 1,
    couponCode: 'CCTKH552FH3264',
    superDistributor: 'Not assigned',
    distributor: 'Not assigned',
    tsm: 'Not assigned',
    seller: 'Not assigned',
    invoiceNo: 'CT120550F',
    date: 'Jan 04, 2026',
}));

const PagBtn = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
        {children}
    </button>
);

const Catalogs = () => {
    const [activeTab, setActiveTab] = useState('Pro');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filtered = catalogData.filter(r =>
        r.couponCode.toLowerCase().includes(search.toLowerCase()) ||
        r.invoiceNo.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const currentData = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">

            {/* Top Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-extrabold text-purple-600">Coupon list</h1>
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

            {/* Tab Row + Search */}
            <div className="flex items-center justify-between mb-4 gap-4">
                {/* Pro / Plus Tabs */}
                <div className="flex bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {['Pro', 'Plus'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`px-14 py-2.5 text-sm font-bold transition-all ${activeTab === tab
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'text-gray-400 hover:text-gray-600 bg-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative min-w-[260px]">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all shadow-sm placeholder-gray-400"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Purple Header */}
                <div className="bg-purple-100 px-5 py-4 flex justify-between items-center">
                    <h2 className="text-base font-bold text-purple-700">{activeTab} catalog</h2>
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
                                {["Sr", "Coupon code", "Super distributor", "Distributor", "TSM", "Seller", "Invoice no.", "Date"].map((h, i) => (
                                    <th
                                        key={i}
                                        className={`px-5 py-3 text-left text-sm font-bold text-gray-800 ${i < 7 ? 'border-r border-gray-100' : ''}`}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.length > 0 ? currentData.map((row, idx) => (
                                <tr key={idx} className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors">
                                    <td className="px-5 py-3 text-sm text-gray-500 border-r border-gray-50">{row.sr}</td>
                                    <td className="px-5 py-3 text-sm text-gray-800 font-medium border-r border-gray-50">{row.couponCode}</td>
                                    <td className="px-5 py-3 text-sm text-gray-400 border-r border-gray-50">{row.superDistributor}</td>
                                    <td className="px-5 py-3 text-sm text-gray-400 border-r border-gray-50">{row.distributor}</td>
                                    <td className="px-5 py-3 text-sm text-gray-400 border-r border-gray-50">{row.tsm}</td>
                                    <td className="px-5 py-3 text-sm text-gray-400 border-r border-gray-50">{row.seller}</td>
                                    <td className="px-5 py-3 text-sm text-gray-700 border-r border-gray-50">{row.invoiceNo}</td>
                                    <td className="px-5 py-3 text-sm text-gray-600">{row.date}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={8} className="px-5 py-12 text-center text-sm text-gray-400">No results found</td>
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

export default Catalogs;