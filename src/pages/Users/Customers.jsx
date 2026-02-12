import {
    Calendar,
    RefreshCw,
    Filter,
    LayoutGrid,
    Search,
    ChevronDown,
    Smartphone,
    User,
    Shield,
    Lock,
    Unlock,
    Target,
    Edit3,
    CreditCard,
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
        name: 'kaki singh',
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
    }, {
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
];

const FilterDropdown = ({ label, options }) => (
    <div className="flex flex-col gap-1.5 min-w-[140px]">
        <label className="text-xs font-bold text-secondary-900 dark:text-secondary-400 uppercase tracking-tight">{label}</label>
        <div className="relative">
            <select className="w-full appearance-none bg-white dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 rounded-xl px-4 py-2.5 text-sm text-secondary-700 dark:text-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer">
                <option value="">Status</option>
                {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400 pointer-events-none" />
        </div>
    </div>
);

const Customers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalPages = Math.ceil(customerData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = customerData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-extrabold text-primary">Users</h1>
                <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg px-4 py-2 shadow-sm transition-colors">
                        <Calendar className="w-4 h-4 text-secondary-500 mr-2" />
                        <span className="text-sm font-medium text-secondary-800 dark:text-secondary-200">
                            23 May 2025 - 30 May 2025
                        </span>
                    </div>
                    <button className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg p-2 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                        <Filter className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                    </button>
                    <button className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg p-2 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                        <RefreshCw className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                    </button>
                    <button className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg p-2 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors shadow-sm">
                        <LayoutGrid className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-end gap-6">
                <FilterDropdown label="Phone Status" options={['Locked', 'Unlocked']} />
                <FilterDropdown label="App Status" options={['Active', 'Inactive']} />
                <FilterDropdown label="Type" options={['Pro', 'Plus']} />
                <FilterDropdown label="Device Setup" options={['Done', 'Pending']} />

                <div className="flex-1 min-w-[300px]">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-white dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-700 rounded-xl px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm text-secondary-900 dark:text-secondary-100 placeholder-secondary-400"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                    </div>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 shadow-card overflow-hidden transition-colors">
                <div className="p-4 border-b border-secondary-100 dark:border-secondary-800 flex justify-between items-center text-center sm:text-left">
                    <h2 className="text-base font-bold text-secondary-900 dark:text-secondary-100">Customer</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">Show entities</span>
                        <div className="relative">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="appearance-none bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg px-3 py-1 pr-8 text-sm text-secondary-800 dark:text-secondary-200 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 dark:hover:border-secondary-600 transition-colors"
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
                            <tr className="bg-white dark:bg-secondary-900 border-b border-secondary-100 dark:border-secondary-800">
                                <th className="px-4 py-4 text-center text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800 min-w-[120px]">Image</th>
                                <th className="px-4 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800 min-w-[180px]">User data</th>
                                <th className="px-4 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800 min-w-[140px]">Device data</th>
                                <th className="px-4 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800 min-w-[180px]">Phone status</th>
                                <th className="px-4 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800 min-w-[200px]">Serial no.</th>
                                <th className="px-4 py-4 text-left text-sm font-bold text-secondary-900 dark:text-secondary-100 border-r border-secondary-50 dark:border-secondary-800 min-w-[180px]">Device created</th>
                                <th className="px-4 py-4 text-center text-sm font-bold text-secondary-900 dark:text-secondary-100 min-w-[120px]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr key={`${row.id}-${index}`} className="border-b border-secondary-50 dark:border-secondary-800 hover:bg-secondary-50/30 dark:hover:bg-secondary-800/30 transition-colors group text-center sm:text-left">
                                    <td className="p-4 border-r border-secondary-50 dark:border-secondary-800 align-top">
                                        <div className="flex justify-center">
                                            <div className="w-24 h-28 rounded-xl overflow-hidden shadow-sm border border-secondary-100 dark:border-secondary-700">
                                                <img src={row.image} alt={row.name} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border-r border-secondary-50 dark:border-secondary-800 align-top">
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Name : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.name}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Phone no : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.phone}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Seller Name : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.sellerName}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Phone no : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.sellerPhone}</span></p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-r border-secondary-50 dark:border-secondary-800 align-top">
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Model : <span className="font-medium text-secondary-400 ml-1">{row.model}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Version : <span className="font-medium text-secondary-400 ml-1">{row.version}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Device : <span className="font-medium text-secondary-400 ml-1">{row.device}</span></p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-r border-secondary-50 dark:border-secondary-800 align-top">
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Phone status : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.phoneStatus}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">App status : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.appStatus}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left leading-relaxed">IMEI no. : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.imei}</span></p>
                                            <div className="text-left">
                                                <button className="text-success text-xs font-bold hover:underline">Activity log</button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border-r border-secondary-50 dark:border-secondary-800 align-top">
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Serial no : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.serialNo}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">TSM name : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.tsmName}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">TSM no : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.tsmPhone}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Office code 1 : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.officeCode1}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Office code 2 : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.officeCode2}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Violation code : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.violationCode}</span></p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-r border-secondary-50 dark:border-secondary-800 align-top">
                                        <div className="space-y-1.5">
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Created on : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.createdOn}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Time : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.time}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left">Invoice : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.invoice}</span></p>
                                            <p className="text-xs font-bold text-secondary-900 dark:text-secondary-100 text-left leading-relaxed">Coupon : <span className="font-medium text-secondary-600 dark:text-secondary-400 ml-1">{row.coupon}</span></p>
                                        </div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="flex justify-center">
                                            <div className="grid grid-cols-2 gap-2">
                                                <button className="w-10 h-10 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors shadow-sm border border-red-100 dark:border-red-900/40" title="SIM Settings">
                                                    <CreditCard className="w-5 h-5" />
                                                </button>
                                                <button className="w-10 h-10 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 rounded-lg flex items-center justify-center hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors shadow-sm border border-yellow-100 dark:border-yellow-900/40" title="Edit">
                                                    <Edit3 className="w-5 h-5" />
                                                </button>
                                                <button className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors shadow-sm border border-blue-100 dark:border-blue-900/40" title="Track">
                                                    <Target className="w-5 h-5" />
                                                </button>
                                                <button className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 text-orange-400 rounded-lg flex items-center justify-center hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors shadow-sm border border-orange-100 dark:border-orange-900/40" title="Lock/Unlock">
                                                    <Unlock className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 flex justify-end items-center bg-white dark:bg-secondary-900 border-t border-secondary-100 dark:border-secondary-800 transition-colors">
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className="p-2 text-secondary-400 dark:text-secondary-600 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronsLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 text-secondary-400 dark:text-secondary-600 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-8 h-8 rounded text-sm font-bold flex items-center justify-center transition-all ${currentPage === page
                                    ? 'bg-primary text-white shadow-md'
                                    : 'text-secondary-500 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronsRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
