import {
    Calendar,
    RefreshCw,
    Filter,
    LayoutGrid,
    ChevronDown,
    Search,
    Edit3,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight
} from 'lucide-react';
import { useState } from 'react';

const allocationData = [
    {
        id: 1,
        name: 'Sumit singh',
        email: 'suraksha@gmail.com',
        number: '+91 5959595959',
        status: 'Active',
        couponCount: '45000/25600'
    }
];

const AllocationHeader = () => (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-[#D32F2F]">Coupon Allocation</h1>
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

const Allocation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = 1;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex-1 space-y-6">
            <AllocationHeader />

            {/* Search Row */}
            <div className="flex justify-start">
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
                    <h2 className="text-base font-bold text-secondary-900">Company Coupons</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-secondary-600">Show entities</span>
                        <div className="relative">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
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
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Name</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Email id</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Number</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Status</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Coupon count</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allocationData.map((row) => (
                                <tr key={row.id} className="border-b border-secondary-50 hover:bg-secondary-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-secondary-800 font-medium border-r border-secondary-50 text-center">{row.name}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-800 border-r border-secondary-50 text-center">{row.email}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-800 border-r border-secondary-50 text-center">{row.number}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-800 border-r border-secondary-50 text-center">{row.status}</td>
                                    <td className="px-6 py-4 text-sm text-secondary-800 border-r border-secondary-50 text-center">{row.couponCount}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="flex items-center justify-center gap-2 mx-auto text-secondary-600 hover:text-primary transition-colors group/btn">
                                            <Edit3 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Edit</span>
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
                        <button className="p-2 text-secondary-400 hover:text-secondary-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronsLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-secondary-400 hover:text-secondary-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button className="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 transition-colors">
                            0
                        </button>
                        <button className="w-8 h-8 rounded bg-[#D32F2F] text-white text-sm font-bold flex items-center justify-center transition-all shadow-md">
                            1
                        </button>
                        <button className="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 transition-colors">
                            2
                        </button>

                        <button className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors">
                            <ChevronsRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allocation;
