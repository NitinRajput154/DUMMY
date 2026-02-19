import { useState, useMemo, useCallback } from "react";

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 20, 50];

const TABLE_COLUMNS = ["Business name", "Login info", "Number", "Coupons", "Status", "Created date", "Action"];

const INITIAL_DATA = [
    {
        id: "Dist2", name: "Aisha", address: "Sector 7 noida",
        username: "ai", email: "ai123@gmail.com", password: "Ai123",
        number: "9876543210", plusUsed: 25, plusTotal: 25, proUsed: 0, proTotal: 0,
        status: "Active", createdDate: "2026-02-16", createdTime: "12:33:24",
    },
    {
        id: "Dist3", name: "Ravi", address: "Sector 12 Gurgaon",
        username: "ravi_99", email: "ravi99@gmail.com", password: "R@vi99",
        number: "9123456780", plusUsed: 20, plusTotal: 25, proUsed: 5, proTotal: 10,
        status: "Inactive", createdDate: "2026-02-15", createdTime: "09:20:11",
    },
    {
        id: "Dist4", name: "Priya", address: "Sector 5 Delhi",
        username: "priya_p", email: "priya.p@gmail.com", password: "Priya123",
        number: "9988776655", plusUsed: 15, plusTotal: 25, proUsed: 2, proTotal: 0,
        status: "Active", createdDate: "2026-02-14", createdTime: "15:45:30",
    },
    {
        id: "Dist5", name: "Karan", address: "Sector 14 Faridabad",
        username: "karan_21", email: "karan21@gmail.com", password: "Karan21!",
        number: "9871234560", plusUsed: 18, plusTotal: 25, proUsed: 1, proTotal: 5,
        status: "Inactive", createdDate: "2026-02-13", createdTime: "10:10:10",
    },
];

const Icons = {
    Search: () => (<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" /></svg>),
    Calendar: () => (<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
    Filter: () => (<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" /></svg>),
    Refresh: () => (<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>),
    Eye: () => (<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
    ChevronDown: () => (<svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>),
};

const PageHeader = () => (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-600 tracking-tight">Seller</h1>
        <div className="flex items-center gap-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">Add</button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">Export</button>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"><Icons.Refresh /></button>
        </div>
    </div>
);

const FiltersBar = ({ search, onSearchChange }) => (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2"><Icons.Search /></span>
            <input className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Search" value={search} onChange={(e) => onSearchChange(e.target.value)} />
        </div>
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><Icons.Calendar />23 May 2025 - 30 May 2025</div>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><Icons.Filter /></button>
        </div>
    </div>
);

const EntitiesSelector = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button className="flex items-center gap-1 bg-purple-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg cursor-pointer select-none" onClick={() => setIsOpen((p) => !p)}>{value}<Icons.ChevronDown /></button>
            {isOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 min-w-[60px]">
                    {ITEMS_PER_PAGE_OPTIONS.map((opt) => (
                        <button key={opt} className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-purple-50 ${opt === value ? "font-bold text-purple-600" : "text-gray-700"}`} onClick={() => { onChange(opt); setIsOpen(false); }}>{opt}</button>
                    ))}
                </div>
            )}
        </div>
    );
};

/** Seller-specific action buttons: Edit, Payment due, Return, Assign Coupon */
const RowActions = () => (
    <div className="flex flex-col gap-1.5">
        <div className="flex gap-1.5">
            <button className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">Edit</button>
            <button className="text-xs font-semibold px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">Payment Cleared</button>
        </div>
        <div className="flex gap-1.5">
            <button className="text-xs font-semibold px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors">Return</button>
            <button className="text-xs font-semibold px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors">Assign Coupon</button>
        </div>
    </div>
);

const GRID_COLS = "grid-cols-[1.3fr_1.6fr_1fr_1.2fr_0.7fr_1fr_1.6fr]";

/** Seller row — Coupons column shows Plus and Pro separately */
const TableRow = ({ row, isLast }) => (
    <div className={`grid ${GRID_COLS} gap-4 px-6 py-5 items-start ${!isLast ? "border-b border-gray-100" : ""} hover:bg-purple-50/30 transition-colors`}>
        <div className="text-sm text-gray-700 space-y-0.5">
            <div><span className="font-semibold text-gray-900">Sl no</span> : {row.id}</div>
            <div><span className="font-semibold text-gray-900">Name</span> : {row.name}</div>
            <div><span className="font-semibold text-gray-900">Address</span> : {row.address}</div>
        </div>
        <div className="text-sm text-gray-700 space-y-0.5">
            <div><span className="font-semibold text-gray-900">Username</span> : {row.username}</div>
            <div><span className="font-semibold text-gray-900">Email</span> : {row.email}</div>
            <div><span className="font-semibold text-gray-900">Password</span> : {row.password}</div>
        </div>
        <div className="text-sm text-gray-800 font-medium pt-0.5">{row.number}</div>
        {/* Coupons — Plus / Pro format */}
        <div className="text-sm pt-0.5">
            <div className="font-semibold text-gray-800">Plus : {row.plusUsed} / {row.plusTotal}</div>
            <div className="font-semibold text-gray-800">Pro : {row.proUsed} / {row.proTotal}</div>
            <button className="text-gray-400 text-xs flex items-center gap-1 mt-1 hover:text-purple-500 transition-colors"><Icons.Eye />Show History</button>
        </div>
        <div className="pt-0.5">
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${row.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>{row.status}</span>
        </div>
        <div className="text-sm text-gray-700 pt-0.5">
            <div className="font-medium">{row.createdDate}</div>
            <div className="text-gray-400 text-xs">{row.createdTime}</div>
        </div>
        <RowActions />
    </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i);
    return (
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors text-xs" onClick={() => onPageChange(0)} disabled={currentPage === 0}>««</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors" onClick={() => onPageChange(Math.max(0, currentPage - 1))} disabled={currentPage === 0}>‹</button>
            {pages.map((page) => (
                <button key={page} className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors ${page === currentPage ? "bg-purple-600 text-white font-semibold shadow" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => onPageChange(page)}>{page}</button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors" onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))} disabled={currentPage === totalPages - 1}>›</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors text-xs" onClick={() => onPageChange(totalPages - 1)} disabled={currentPage === totalPages - 1}>»»</button>
        </div>
    );
};

function Sellers() {
    const [search, setSearch] = useState("");
    const [showEntities, setShowEntities] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const filteredData = useMemo(() => {
        const q = search.toLowerCase();
        return INITIAL_DATA.filter((d) => d.name.toLowerCase().includes(q) || d.id.toLowerCase().includes(q));
    }, [search]);

    const paginatedData = useMemo(() => {
        const s = currentPage * showEntities;
        return filteredData.slice(s, s + showEntities);
    }, [filteredData, currentPage, showEntities]);

    const totalPages = Math.max(1, Math.ceil(filteredData.length / showEntities));
    const handleEntitiesChange = useCallback((v) => { setShowEntities(v); setCurrentPage(0); }, []);
    const handleSearchChange = useCallback((v) => { setSearch(v); setCurrentPage(0); }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <PageHeader />
            <FiltersBar search={search} onSearchChange={handleSearchChange} />
            <div className="p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-purple-100 px-6 py-4 flex items-center justify-between">
                        <h2 className="text-purple-700 font-bold text-base">Seller list</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-medium">Show entities</span>
                            <EntitiesSelector value={showEntities} onChange={handleEntitiesChange} />
                        </div>
                    </div>
                    <div className={`grid ${GRID_COLS} gap-4 px-6 py-3 border-b border-gray-100 bg-gray-50`}>
                        {TABLE_COLUMNS.map((h) => (<div key={h} className="text-xs font-bold text-gray-500 uppercase tracking-wider">{h}</div>))}
                    </div>
                    {paginatedData.length > 0 ? paginatedData.map((row, idx) => (<TableRow key={`${row.id}-${idx}`} row={row} isLast={idx === paginatedData.length - 1} />)) : (<div className="px-6 py-12 text-center text-gray-400 text-sm">No results found.</div>)}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            </div>
        </div>
    );
}

export default Sellers;
