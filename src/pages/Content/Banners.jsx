import {
    Calendar,
    RefreshCw,
    Filter,
    LayoutGrid,
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
        title: 'NEW EMI LOCKER',
        subtitle: 'Advanced Smart EMI Management',
        status: 'Active',
    },
    {
        id: 2,
        type: 'Png',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60',
        title: 'FLASH DEAL',
        subtitle: 'Grab Now',
        status: 'Inactive',
    },
];

const Banners = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = 2;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-extrabold text-primary">Content</h1>
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

            {/* Table Card */}
            <div className="bg-white rounded-2xl border border-secondary-100 shadow-card overflow-hidden">
                <div className="p-4 border-b border-secondary-100 flex justify-between items-center">
                    <h2 className="text-base font-bold text-secondary-900">Banners</h2>
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
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50 w-32">Type</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Banner</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50 w-48">Status</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 w-32">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bannerData.map((row) => (
                                <tr key={row.id} className="border-b border-secondary-50 hover:bg-secondary-50/30 transition-colors group">
                                    <td className="p-6 border-r border-secondary-50 text-center">
                                        <span className="text-sm font-medium text-secondary-800">{row.type}</span>
                                    </td>
                                    <td className="p-6 border-r border-secondary-50">
                                        <div className="flex justify-center">
                                            <div className="relative w-full max-w-[400px] aspect-[2/1] rounded-2xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300 border border-secondary-100">
                                                <img
                                                    src={row.image}
                                                    alt={row.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-6">
                                                    <h3 className="text-white font-black text-xl tracking-tight leading-tight">{row.title}</h3>
                                                    <p className="text-white/80 text-[10px] mt-1 font-medium">{row.subtitle}</p>
                                                    <div className="mt-4">
                                                        <span className="bg-blue-600 text-white text-[10px] px-4 py-1.5 rounded-full font-bold shadow-sm">
                                                            {row.id === 1 ? 'Start Now' : 'Grab Now'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 border-r border-secondary-50 text-center">
                                        <span className={`text-sm font-bold ${row.status === 'Active' ? 'text-success' : 'text-secondary-400'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="p-6 text-center">
                                        <button className="flex items-center justify-center gap-2 mx-auto text-secondary-600 hover:text-primary transition-colors group/btn">
                                            <Edit3 className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                            <span className="text-sm font-bold">Edit</span>
                                        </button>
                                    </td>
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

                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 rounded text-sm font-bold flex items-center justify-center transition-all ${currentPage === page
                                    ? 'bg-primary text-white shadow-md'
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

export default Banners;
