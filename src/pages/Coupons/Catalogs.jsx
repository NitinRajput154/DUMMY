import {
    Calendar,
    RefreshCw,
    Filter,
    LayoutGrid,
    ChevronDown,
    Search,
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
    date: 'Jan 04, 2026'
}));

const CatalogHeader = () => (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-primary">Coupon Catalog</h1>
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

const Catalogs = () => {
    const [activeTab, setActiveTab] = useState('Pro');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalPages = Math.ceil(catalogData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = catalogData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex-1 space-y-6">
            <CatalogHeader />

            {/* Controls Row */}
            <div className="flex justify-between items-center bg-transparent">
                <div className="flex bg-white rounded-xl p-1 shadow-sm border border-secondary-100 w-fit">
                    <button
                        onClick={() => setActiveTab('Pro')}
                        className={`px-12 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'Pro'
                                ? 'bg-[#D1D9FF] text-[#4D5CC4] shadow-sm'
                                : 'text-secondary-400 hover:text-secondary-600'
                            }`}
                    >
                        Pro
                    </button>
                    <button
                        onClick={() => setActiveTab('Plus')}
                        className={`px-12 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'Plus'
                                ? 'bg-[#D1D9FF] text-[#4D5CC4] shadow-sm'
                                : 'text-secondary-400 hover:text-secondary-600'
                            }`}
                    >
                        Plus
                    </button>
                </div>
                <div className="relative min-w-[300px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-white border border-secondary-100 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-secondary-100 shadow-card overflow-hidden">
                <div className="p-4 border-b border-secondary-100 flex justify-between items-center">
                    <h2 className="text-base font-bold text-secondary-900">Catalog</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-secondary-600">Show entities</span>
                        <div className="relative">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="appearance-none bg-white border border-secondary-200 rounded-lg px-3 py-1 pr-8 text-sm text-secondary-800 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 transition-colors"
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-secondary-100">
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Sr</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Coupon code</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Super distributor</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Distributor</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">TSM</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Seller</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900 border-r border-secondary-50">Invoice no.</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-secondary-900">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row) => (
                                <tr key={row.id} className="border-b border-secondary-50 hover:bg-secondary-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-secondary-600 border-r border-secondary-50">{row.sr}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-800 font-medium border-r border-secondary-50">{row.couponCode}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-400 border-r border-secondary-50">{row.superDistributor}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-400 border-r border-secondary-50">{row.distributor}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-400 border-r border-secondary-50">{row.tsm}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-400 border-r border-secondary-50">{row.seller}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-800 border-r border-secondary-50">{row.invoiceNo}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-600">{row.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 flex justify-end items-center bg-white border-t border-secondary-100">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className="p-2 text-secondary-400 hover:text-secondary-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronsLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 text-secondary-400 hover:text-secondary-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 rounded text-sm font-bold flex items-center justify-center transition-all ${currentPage === page
                                    ? 'bg-[#E53935] text-white shadow-md'
                                    : 'text-secondary-500 hover:text-secondary-900'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronsRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalogs;
