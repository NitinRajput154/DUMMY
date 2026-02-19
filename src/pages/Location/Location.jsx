import { useState, useMemo, useCallback } from "react";
import { Edit3 } from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50];

const STATE_DATA = [
    { id: 1, name: "Andhra Pradesh", status: "Active" },
    { id: 2, name: "Arunachal Pradesh", status: "Active" },
    { id: 3, name: "Assam", status: "Active" },
    { id: 4, name: "Bihar", status: "Active" },
    { id: 5, name: "Chhattisgarh", status: "Active" },
    { id: 6, name: "Goa", status: "Active" },
    { id: 7, name: "Gujarat", status: "Active" },
    { id: 8, name: "Haryana", status: "Active" },
    { id: 9, name: "Himachal Pradesh", status: "Active" },
    { id: 10, name: "Jharkhand", status: "Active" },
    { id: 11, name: "Karnataka", status: "Active" },
    { id: 12, name: "Kerala", status: "Active" },
    { id: 13, name: "Madhya Pradesh", status: "Active" },
    { id: 14, name: "Maharashtra", status: "Active" },
];

const CITY_DATA = [
    { id: 1, name: "Mumbai", status: "Active" },
    { id: 2, name: "Delhi", status: "Active" },
    { id: 3, name: "Bangalore", status: "Active" },
    { id: 4, name: "Hyderabad", status: "Active" },
    { id: 5, name: "Chennai", status: "Active" },
    { id: 6, name: "Kolkata", status: "Active" },
    { id: 7, name: "Pune", status: "Active" },
    { id: 8, name: "Ahmedabad", status: "Active" },
    { id: 9, name: "Jaipur", status: "Active" },
    { id: 10, name: "Lucknow", status: "Active" },
];

const Icons = {
    Refresh: () => (<svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>),
    Search: () => (<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" /></svg>),
    ChevronDown: () => (<svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>),
};

// ─── Sub-Components ──────────────────────────────────────────────────────────

const EntitiesSelector = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button className="flex items-center gap-1 bg-purple-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg cursor-pointer select-none" onClick={() => setIsOpen((p) => !p)}>
                {value}<Icons.ChevronDown />
            </button>
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

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="px-6 py-4 flex items-center justify-end gap-1">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 text-xs" onClick={() => onPageChange(0)} disabled={currentPage === 0}>««</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-400">0</button>
        {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
            <button key={page} className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors ${page === currentPage ? "bg-purple-600 text-white font-semibold shadow" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => onPageChange(page)}>{page + 1}</button>
        ))}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 text-xs" onClick={() => onPageChange(totalPages - 1)} disabled={currentPage === totalPages - 1}>»»</button>
    </div>
);

// ─── Main Component ─────────────────────────────────────────────────────────

function Location() {
    const [activeTab, setActiveTab] = useState("state"); // "state" | "city"
    const [search, setSearch] = useState("");
    const [showEntities, setShowEntities] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const sourceData = activeTab === "state" ? STATE_DATA : CITY_DATA;

    const filteredData = useMemo(() => {
        const q = search.toLowerCase();
        return sourceData.filter((d) => d.name.toLowerCase().includes(q));
    }, [search, sourceData]);

    const paginatedData = useMemo(() => {
        const start = currentPage * showEntities;
        return filteredData.slice(start, start + showEntities);
    }, [filteredData, currentPage, showEntities]);

    const totalPages = Math.max(1, Math.ceil(filteredData.length / showEntities));

    const handleEntitiesChange = useCallback((v) => { setShowEntities(v); setCurrentPage(0); }, []);
    const handleSearchChange = useCallback((v) => { setSearch(v); setCurrentPage(0); }, []);
    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
        setSearch("");
        setCurrentPage(0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-purple-600 tracking-tight">Location</h1>
                <div className="flex items-center gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">Add</button>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Icons.Refresh />
                    </button>
                </div>
            </div>

            <div className="p-6">
                {/* Tabs + Search */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0">
                        <button
                            onClick={() => handleTabChange("state")}
                            className={`px-8 py-2.5 text-sm font-semibold rounded-lg transition-colors ${activeTab === "state"
                                    ? "bg-purple-600 text-white shadow-sm"
                                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            State
                        </button>
                        <button
                            onClick={() => handleTabChange("city")}
                            className={`px-8 py-2.5 text-sm font-semibold rounded-lg transition-colors ${activeTab === "city"
                                    ? "bg-purple-600 text-white shadow-sm"
                                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            City
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            className="border border-gray-300 rounded-lg pl-3 pr-9 py-2 text-sm w-52 focus:outline-none focus:ring-2 focus:ring-purple-300"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2"><Icons.Search /></span>
                    </div>
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Purple header bar */}
                    <div className="bg-purple-100 px-6 py-4 flex items-center justify-between">
                        <h2 className="text-purple-700 font-bold text-base">Location</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-medium">Show entities</span>
                            <EntitiesSelector value={showEntities} onChange={handleEntitiesChange} />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 w-1/3">Name</th>
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 w-1/3">Status</th>
                                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 w-1/3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.length > 0 ? (
                                    paginatedData.map((row) => (
                                        <tr key={row.id} className="border-b border-gray-50 hover:bg-purple-50/20 transition-colors">
                                            <td className="px-6 py-3.5 text-center text-gray-700">{row.name}</td>
                                            <td className="px-6 py-3.5 text-center">
                                                <span className={`text-sm font-medium ${row.status === "Active" ? "text-green-600" : "text-gray-400"}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-center">
                                                <button className="inline-flex items-center gap-1.5 text-gray-500 hover:text-purple-600 transition-colors">
                                                    <Edit3 className="w-4 h-4" />
                                                    <span className="text-sm font-medium">Edit</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-12 text-center text-gray-400">No results found.</td>
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

export default Location;
