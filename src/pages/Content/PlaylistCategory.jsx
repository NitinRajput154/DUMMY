import { useState, useMemo, useCallback } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50];

const INITIAL_DATA = [
    { id: 1, name: "Pro Installation", status: "Active", order: 3 },
    { id: 2, name: "RAPID Installation", status: "Active", order: 2 },
    { id: 3, name: "Retailer App Feature", status: "Active", order: 1 },
    { id: 4, name: "Seller App", status: "InActive", order: 0 },
];

const TABLE_COLUMNS = ["Name", "Status", "Order", "Action"];

// ─── Main Component ─────────────────────────────────────────────────────────

function PlaylistCategory() {
    const [search, setSearch] = useState("");
    const [showEntries, setShowEntries] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const filteredData = useMemo(() => {
        const q = search.toLowerCase();
        return INITIAL_DATA.filter((d) => d.name.toLowerCase().includes(q));
    }, [search]);

    const paginatedData = useMemo(() => {
        const start = currentPage * showEntries;
        return filteredData.slice(start, start + showEntries);
    }, [filteredData, currentPage, showEntries]);

    const totalPages = Math.max(1, Math.ceil(filteredData.length / showEntries));
    const startEntry = currentPage * showEntries + 1;
    const endEntry = Math.min((currentPage + 1) * showEntries, filteredData.length);

    const handleSearchChange = useCallback((v) => { setSearch(v); setCurrentPage(0); }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Page title */}
            <div className="bg-white border-b border-gray-200 px-6 py-3">
                <h1 className="text-2xl font-bold text-purple-600 tracking-tight">Playlist</h1>
            </div>

            {/* Main card */}
            <div className="p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Card header */}
                    <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800">Category list</h2>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                            Add
                        </button>
                    </div>

                    {/* Show entries + Search */}
                    <div className="px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Show</span>
                            <select
                                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                                value={showEntries}
                                onChange={(e) => { setShowEntries(Number(e.target.value)); setCurrentPage(0); }}
                            >
                                {ITEMS_PER_PAGE_OPTIONS.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <span>entries</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Search:</span>
                            <input
                                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 w-40"
                                value={search}
                                onChange={(e) => handleSearchChange(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    {TABLE_COLUMNS.map((col) => (
                                        <th key={col} className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            {col}
                                            <span className="ml-1 text-gray-300">↕</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.length > 0 ? (
                                    paginatedData.map((row) => (
                                        <tr key={row.id} className="border-b border-gray-100 hover:bg-purple-50/30 transition-colors">
                                            <td className="px-6 py-4 text-gray-800 font-medium">{row.name}</td>
                                            <td className="px-6 py-4">
                                                <span className={`text-sm font-semibold ${row.status === "Active" ? "text-green-600" : "text-gray-400"}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{row.order}</td>
                                            <td className="px-6 py-4">
                                                <button className="text-xs font-semibold px-5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-gray-400">No results found.</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr className="border-t border-gray-200">
                                    {TABLE_COLUMNS.map((col) => (
                                        <th key={col} className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{col}</th>
                                    ))}
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Footer: Showing X to Y of Z entries + Pagination */}
                    <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100">
                        <span className="text-sm text-gray-500">
                            Showing {filteredData.length > 0 ? startEntry : 0} to {endEntry} of {filteredData.length} entries
                        </span>
                        <div className="flex items-center gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 text-xs" onClick={() => setCurrentPage(0)} disabled={currentPage === 0}>««</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-400">0</button>
                            {Array.from({ length: totalPages }, (_, i) => i).map((page) => (
                                <button key={page} className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors ${page === currentPage ? "bg-purple-600 text-white font-semibold shadow" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => setCurrentPage(page)}>{page + 1}</button>
                            ))}
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 text-xs" onClick={() => setCurrentPage(totalPages - 1)} disabled={currentPage === totalPages - 1}>»»</button>
                        </div>
                    </div>
                </div>

                {/* Footer copyright */}
                <div className="text-center text-sm text-gray-400 mt-6">
                    2025 © Copyright <a href="#" className="text-purple-600 hover:underline">Suraksha Pvt Ltd</a>
                </div>
            </div>
        </div>
    );
}

export default PlaylistCategory;
