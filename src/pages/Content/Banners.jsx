import {
    RefreshCw,
    ChevronDown,
    Edit3,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight
} from 'lucide-react';
import { useState } from 'react';

const bannerData = [
    {
        id: 1,
        type: 'Png',
        image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&auto=format&fit=crop&q=60',
        status: 'Active',
    },
    {
        id: 2,
        type: 'Png',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60',
        status: 'Inactive',
    },
];

const Banners = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = 2;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            {/* Top Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-extrabold text-purple-600">Banners</h1>
                <div className="flex gap-2 items-center">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
                        Add
                    </button>
                    <button className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors shadow-sm">
                        <RefreshCw className="w-4 h-4 text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Purple Header Bar */}
                <div className="bg-[#A594F9] px-5 py-4 flex justify-between items-center">
                    <h2 className="text-base font-bold text-white">Add Banners</h2>
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
                                <th className="px-6 py-3 text-center text-sm font-bold text-gray-800 border-r border-gray-100 w-28">Type</th>
                                <th className="px-6 py-3 text-center text-sm font-bold text-gray-800 border-r border-gray-100">Banner</th>
                                <th className="px-6 py-3 text-center text-sm font-bold text-gray-800 border-r border-gray-100 w-40">Status</th>
                                <th className="px-6 py-3 text-center text-sm font-bold text-gray-800 w-32">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bannerData.map((row) => (
                                <tr key={row.id} className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors">
                                    {/* Type */}
                                    <td className="px-6 py-6 border-r border-gray-100 text-center align-middle">
                                        <span className="text-sm font-medium text-gray-700">{row.type}</span>
                                    </td>

                                    {/* Banner Image */}
                                    <td className="px-6 py-6 border-r border-gray-100 align-middle">
                                        <div className="flex justify-start">
                                            <div className="w-[220px] h-[120px] rounded-xl overflow-hidden shadow-md border border-gray-100">
                                                <img
                                                    src={row.image}
                                                    alt={`Banner ${row.id}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-6 border-r border-gray-100 text-center align-middle">
                                        <span className={`text-sm font-semibold ${row.status === 'Active' ? 'text-green-500' : 'text-gray-400'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>

                                    {/* Edit */}
                                    <td className="px-6 py-6 text-center align-middle">
                                        <button className="inline-flex items-center gap-1.5 text-gray-500 hover:text-purple-600 transition-colors group">
                                            <Edit3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-semibold">Edit</span>
                                        </button>
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

                        {[1, 2].map((page) => (
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

const PagBtn = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
        {children}
    </button>
);

export default Banners;