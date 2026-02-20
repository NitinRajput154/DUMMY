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
    Eye,
    Plus,
} from 'lucide-react';
import { useState } from 'react';
import AddSuperDistributorModal from './AddSuperDistributorModal';
import AddDistributorModal from './AddDistributorModal';
import AssignCouponModal from './AssignCouponModal';
import CouponHistoryModal from './CouponHistoryModal';

const INITIAL_DATA = [
    {
        id: "Dist1",
        name: "sumit",
        address: "Sector 3 new delhi",
        username: "sh",
        email: "sh806@gmail.com",
        password: "Sh806",
        number: "7065305951",
        couponsUsed: 9236,
        couponsTotal: 50,
        status: "Active",
    },
    {
        id: "Dist2",
        name: "Aditi",
        address: "Sector 5 bangalore",
        username: "adit123",
        email: "aditi@example.com",
        password: "Aditi2023",
        number: "9988776655",
        couponsUsed: 1123,
        couponsTotal: 75,
        status: "Active",
    },
    {
        id: "Dist3",
        name: "Ravi",
        address: "Sector 8 hyderabad",
        username: "ravi_hy",
        email: "ravi@example.com",
        password: "Ravi@123",
        number: "8877665544",
        couponsUsed: 1500,
        couponsTotal: 100,
        status: "Active",
    },
    {
        id: "Dist4",
        name: "Priya",
        address: "Sector 10 mumbai",
        username: "priya_p",
        email: "priya@example.com",
        password: "Priya2023",
        number: "6655443322",
        couponsUsed: 2000,
        couponsTotal: 120,
        status: "Active",
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

const SuperDistributor = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [isAddDistributorModalOpen, setIsAddDistributorModalOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedSuperDist, setSelectedSuperDist] = useState(null);
    const [selectedSuperDistForEdit, setSelectedSuperDistForEdit] = useState(null);

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

    const openAddDistributor = (superDist) => {
        setSelectedSuperDist(superDist);
        setIsAddDistributorModalOpen(true);
    };

    const openAssignCoupon = (superDist) => {
        setSelectedSuperDist(superDist);
        setIsAssignModalOpen(true);
    };

    const openHistoryModal = (superDist) => {
        setSelectedSuperDist(superDist);
        setIsHistoryModalOpen(true);
    };

    const handleEditClick = (dist) => {
        setSelectedSuperDistForEdit(dist);
        setIsAdding(true);
    };

    const handleBack = () => {
        setIsAdding(false);
        setSelectedSuperDistForEdit(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 space-y-4 font-sans text-left transition-all duration-300">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-extrabold text-purple-600">Super Distributor</h1>
                {!isAdding && (
                    <div className="flex gap-2 items-center">
                        <button
                            onClick={() => { setSelectedSuperDistForEdit(null); setIsAdding(true); }}
                            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm active:scale-95 flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
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
                )}
            </div>

            {isAdding ? (
                <AddSuperDistributorModal
                    onBack={handleBack}
                    initialData={selectedSuperDistForEdit}
                />
            ) : (
                <div className="space-y-4 animate-in fade-in duration-500">
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
                        <div className="bg-[#A594F9]  px-5 py-4 flex justify-between items-center">
                            <h2 className="text-base font-bold text-white">Super Distributor list</h2>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-white/80">Show entities</span>
                                <div className="relative">
                                    <select
                                        value={itemsPerPage}
                                        onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                                        className="appearance-none bg-white text-purple-600 border-0 rounded-lg px-3 py-1.5 pr-8 text-sm font-semibold focus:outline-none cursor-pointer"
                                    >
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={50}>50</option>
                                    </select>
                                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-600 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50/50">
                                        {["Business info", "Login info", "Number", "Coupons count", "Status", "Action"].map((h, i) => (
                                            <th key={i} className={`px-4 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider ${i < 5 ? 'border-r border-gray-100' : ''} text-left`}>
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
                                                    <button
                                                        onClick={() => openHistoryModal(row)}
                                                        className="text-gray-400 text-xs flex items-center gap-1 hover:text-purple-600 transition-colors font-bold"
                                                    >
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

                                            {/* Actions */}
                                            <td className="p-4 align-top">
                                                <div className="flex flex-col gap-2 text-left">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleEditClick(row)}
                                                            className="text-xs font-bold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button className="text-xs font-bold px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                                                            Distributor
                                                        </button>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => openAddDistributor(row)}
                                                            className="text-xs font-bold px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                                                        >
                                                            Add Distributor
                                                        </button>
                                                        <button className="text-xs font-bold px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors whitespace-nowrap">
                                                            Return to CNF
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => openAssignCoupon(row)}
                                                        className="text-xs font-bold px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors w-fit"
                                                    >
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
            )}

            <AddDistributorModal
                isOpen={isAddDistributorModalOpen}
                onClose={() => setIsAddDistributorModalOpen(false)}
                superDistributorName={selectedSuperDist?.name}
            />

            <AssignCouponModal
                isOpen={isAssignModalOpen}
                onClose={() => setIsAssignModalOpen(false)}
                distributorName={selectedSuperDist?.name}
            />

            <CouponHistoryModal
                isOpen={isHistoryModalOpen}
                onClose={() => setIsHistoryModalOpen(false)}
                distributorName={selectedSuperDist?.name}
            />
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

export default SuperDistributor;
