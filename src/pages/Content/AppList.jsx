import { useState, useMemo, useCallback } from "react";
import { Edit3, Calendar } from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50];

const INITIAL_DATA = [
    {
        id: 1,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png",
        name: "Instagram",
        package: "www.instagram.com",
        status: "Active",
    },
    {
        id: 2,
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        name: "Facebook",
        package: "www.facebook.com",
        status: "Inactive",
    },
];

const Icons = {
    Refresh: () => (
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
    ),
    ChevronDown: () => (
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
    ),
};

// ─── Sub-Components ──────────────────────────────────────────────────────────

const EntitiesSelector = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button
                className="flex items-center gap-1 bg-purple-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg cursor-pointer select-none"
                onClick={() => setIsOpen((p) => !p)}
            >
                {value}
                <Icons.ChevronDown />
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 min-w-[60px]">
                    {ITEMS_PER_PAGE_OPTIONS.map((opt) => (
                        <button
                            key={opt}
                            className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-purple-50 ${opt === value ? "font-bold text-purple-600" : "text-gray-700"}`}
                            onClick={() => { onChange(opt); setIsOpen(false); }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="px-6 py-4 flex items-center justify-end gap-1">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 text-xs" onClick={() => onPageChange(0)} disabled={currentPage === 0}>««</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-400">0</button>
        {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
            <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors ${page === currentPage ? "bg-purple-600 text-white font-semibold shadow" : "text-gray-500 hover:bg-gray-100"}`}
                onClick={() => onPageChange(page)}
            >
                {page + 1}
            </button>
        ))}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 text-xs" onClick={() => onPageChange(totalPages - 1)} disabled={currentPage === totalPages - 1}>»»</button>
    </div>
);

// ─── Main Component ─────────────────────────────────────────────────────────

function AppList() {
    const [showEntities, setShowEntities] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const paginatedData = useMemo(() => {
        const start = currentPage * showEntities;
        return INITIAL_DATA.slice(start, start + showEntities);
    }, [currentPage, showEntities]);

    const totalPages = Math.max(1, Math.ceil(INITIAL_DATA.length / showEntities));
    const handleEntitiesChange = useCallback((v) => { setShowEntities(v); setCurrentPage(0); }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-purple-600 tracking-tight">App listing</h1>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        23 May 2025 - 30 May 2025
                    </div>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Icons.Refresh />
                    </button>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                        Add
                    </button>
                </div>
            </div>

            <div className="p-6">
                {/* Table Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Purple header bar */}
                    <div className="bg-purple-100 px-6 py-4 flex items-center justify-between">
                        <h2 className="text-purple-700 font-bold text-base">Apps</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-medium">Show entities</span>
                            <EntitiesSelector value={showEntities} onChange={handleEntitiesChange} />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 w-24">Icon</th>
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700">Name</th>
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700">Package</th>
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700">Status</th>
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.length > 0 ? (
                                    paginatedData.map((row) => (
                                        <tr key={row.id} className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors">
                                            <td className="px-6 py-5 text-center align-middle">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={row.icon}
                                                        alt={row.name}
                                                        className="w-10 h-10 rounded-xl object-contain"
                                                        onError={(e) => {
                                                            e.target.style.display = "none";
                                                        }}
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-center align-middle text-gray-700 font-medium">{row.name}</td>
                                            <td className="px-6 py-5 text-center align-middle text-gray-600">{row.package}</td>
                                            <td className="px-6 py-5 text-center align-middle">
                                                <span className={`text-sm font-semibold ${row.status === "Active" ? "text-green-500" : "text-gray-400"}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-center align-middle">
                                                <button className="inline-flex items-center gap-1.5 text-gray-500 hover:text-purple-600 transition-colors">
                                                    <Edit3 className="w-4 h-4" />
                                                    <span className="text-sm font-medium">Edit</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400">No results found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            </div>
        </div>
    );
}

export default AppList;
