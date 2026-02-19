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

const customerData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        name: 'Manish Singh',
        phone: '+91 005549988',
        sellerName: 'Ramesh sanu',
        sellerPhone: '+91 565595555',
        model: 'null',
        version: 'null',
        device: 'null',
        phoneStatus: 'lock',
        appStatus: 'Active',
        imei: '45688954565654455',
        serialNo: '26545',
        tsmName: 'Mukesh Kumar',
        tsmPhone: '+91 4848484848',
        officeCode1: '41c45s8f',
        officeCode2: '98f6sf5s',
        violationCode: '51K2020344',
        createdOn: 'Jan 04, 2026',
        time: '15:58:96',
        invoice: 'Ct2025-26/75',
        coupon: 'CCTKH552FH3264'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        name: 'Kaka Singh',
        phone: '+91 005549988',
        sellerName: 'Ramesh sanu',
        sellerPhone: '+91 565595555',
        model: 'null',
        version: 'null',
        device: 'null',
        phoneStatus: 'unlock',
        appStatus: 'Active',
        imei: '45688954565654455',
        serialNo: '26545',
        tsmName: 'Mukesh Kumar',
        tsmPhone: '+91 4848484848',
        officeCode1: '41c45s8f',
        officeCode2: '98f6sf5s',
        violationCode: '51K2020344',
        createdOn: 'Jan 04, 2026',
        time: '15:58:96',
        invoice: 'Ct2025-26/75',
        coupon: 'CCTKH552FH3264'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        name: 'Ramu Singh',
        phone: '+91 005549988',
        sellerName: 'Ramesh sanu',
        sellerPhone: '+91 565595555',
        model: 'null',
        version: 'null',
        device: 'null',
        phoneStatus: 'lock',
        appStatus: 'Active',
        imei: '45688954565654455',
        serialNo: '26545',
        tsmName: 'Mukesh Kumar',
        tsmPhone: '+91 4848484848',
        officeCode1: '41c45s8f',
        officeCode2: '98f6sf5s',
        violationCode: '51K2020344',
        createdOn: 'Jan 04, 2026',
        time: '15:58:96',
        invoice: 'Ct2025-26/75',
        coupon: 'CCTKH552FH3264'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        name: 'Manish Singh',
        phone: '+91 005549988',
        sellerName: 'Ramesh sanu',
        sellerPhone: '+91 565595555',
        model: 'null',
        version: 'null',
        device: 'null',
        phoneStatus: 'lock',
        appStatus: 'Active',
        imei: '45688954565654455',
        serialNo: '26545',
        tsmName: 'Mukesh Kumar',
        tsmPhone: '+91 4848484848',
        officeCode1: '41c45s8f',
        officeCode2: '98f6sf5s',
        violationCode: '51K2020344',
        createdOn: 'Jan 04, 2026',
        time: '15:58:96',
        invoice: 'Ct2025-26/75',
        coupon: 'CCTKH552FH3264'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
        name: 'Kaki Singh',
        phone: '+91 005549988',
        sellerName: 'Ramesh sanu',
        sellerPhone: '+91 565595555',
        model: 'null',
        version: 'null',
        device: 'null',
        phoneStatus: 'unlock',
        appStatus: 'Inactive',
        imei: '45688954565654455',
        serialNo: '26545',
        tsmName: 'Mukesh Kumar',
        tsmPhone: '+91 4848484848',
        officeCode1: '41c45s8f',
        officeCode2: '98f6sf5s',
        violationCode: '51K2020344',
        createdOn: 'Jan 04, 2026',
        time: '15:58:96',
        invoice: 'Ct2025-26/75',
        coupon: 'CCTKH552FH3264'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        name: 'Ramu Singh',
        phone: '+91 005549988',
        sellerName: 'Ramesh sanu',
        sellerPhone: '+91 565595555',
        model: 'null',
        version: 'null',
        device: 'null',
        phoneStatus: 'lock',
        appStatus: 'Active',
        imei: '45688954565654455',
        serialNo: '26545',
        tsmName: 'Mukesh Kumar',
        tsmPhone: '+91 4848484848',
        officeCode1: '41c45s8f',
        officeCode2: '98f6sf5s',
        violationCode: '51K2020344',
        createdOn: 'Jan 04, 2026',
        time: '15:58:96',
        invoice: 'Ct2025-26/75',
        coupon: 'CCTKH552FH3264'
    },
];

const FilterDropdown = ({ label, placeholder }) => (
    <div className="flex flex-col gap-1 min-w-[120px]">
        <label className="text-xs font-semibold text-gray-700">{label}</label>
        <div className="relative">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all cursor-pointer pr-8">
                <option value="">{placeholder}</option>
                <option value="lock">Lock</option>
                <option value="unlock">Unlock</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>
    </div>
);

const Customers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [search, setSearch] = useState('');

    const filtered = customerData.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.phone.includes(search)
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
                <h1 className="text-2xl font-extrabold text-purple-600">Customer</h1>
                <div className="flex gap-2 items-center">
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
                <FilterDropdown label="Phone Status" placeholder="Status" />
                <FilterDropdown label="App Status" placeholder="Status" />
                <FilterDropdown label="Type" placeholder="Type" />
                <FilterDropdown label="Device Setup" placeholder="Setup" />
                <FilterDropdown label="Seller" placeholder="Setup" />
                <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                    <div className="h-[19px]" /> {/* spacer for label alignment */}
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
                    <h2 className="text-base font-bold text-purple-700">Customer</h2>
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
                                {["Image", "User data", "Device data", "Phone status", "Serial no.", "Device created"].map((h, i) => (
                                    <th key={i} className={`px-4 py-3 text-sm font-bold text-gray-800 bg-white ${i < 5 ? 'border-r border-gray-100' : ''} ${i === 0 ? 'text-center' : 'text-left'}`}>
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
                                    {/* Image */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="flex justify-center">
                                            <div className="w-20 h-24 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                                <img src={row.image} alt={row.name} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </td>

                                    {/* User data */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <InfoRow label="Name" value={row.name} />
                                            <InfoRow label="Phone no" value={row.phone} />
                                            <InfoRow label="Seller Name" value={row.sellerName} />
                                            <InfoRow label="Phone no" value={row.sellerPhone} />
                                        </div>
                                    </td>

                                    {/* Device data */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <InfoRow label="Model" value={row.model} muted />
                                            <InfoRow label="Version" value={row.version} muted />
                                            <InfoRow label="Device" value={row.device} muted />
                                        </div>
                                    </td>

                                    {/* Phone status */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <div className="text-xs text-left">
                                                <span className="font-bold text-gray-800">Phone status : </span>
                                                <span className={`font-medium ${row.phoneStatus === 'lock' ? 'text-red-500' : 'text-green-500'}`}>
                                                    {row.phoneStatus}
                                                </span>
                                            </div>
                                            <InfoRow label="App status" value={row.appStatus} />
                                            <InfoRow label="IMEI no." value={row.imei} />
                                            <div className="text-left pt-0.5">
                                                <button className="text-green-500 text-xs font-bold hover:underline">Activity log</button>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Serial no. */}
                                    <td className="p-4 border-r border-gray-50 align-top">
                                        <div className="space-y-1">
                                            <InfoRow label="Serial no" value={row.serialNo} />
                                            <InfoRow label="TSM name" value={row.tsmName} />
                                            <InfoRow label="TSM no" value={row.tsmPhone} />
                                            <InfoRow label="Office code 1" value={row.officeCode1} />
                                            <InfoRow label="Office code 2" value={row.officeCode2} />
                                            <InfoRow label="Violation code" value={row.violationCode} />
                                        </div>
                                    </td>

                                    {/* Device created */}
                                    <td className="p-4 align-top">
                                        <div className="space-y-1">
                                            <InfoRow label="Created on" value={row.createdOn} />
                                            <InfoRow label="Time" value={row.time} />
                                            <InfoRow label="Invoice" value={row.invoice} />
                                            <InfoRow label="Coupon" value={row.coupon} />
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

                        {/* Page 0 (always shown as inactive per screenshot style) */}
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

export default Customers;